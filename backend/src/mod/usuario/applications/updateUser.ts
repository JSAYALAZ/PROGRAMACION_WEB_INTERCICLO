
import { AppError } from "../../../shared/AppError";
import { getProgrammerProfileByUserId } from "../../programador/applications/getProgrammerProfileByUserId";
import { UserUpdateDTO } from "../api/dto/input";
import { UserDb } from "../db/UserDb";
import { getUserById } from "./getUserById";
import { createProgrammerProfile } from "../../programador/applications/createProgrammerProfile";

export const updateUser = async (id: string, dto: UserUpdateDTO) => {
  try {
    const user = await getUserById(id);
    user.setUsername(dto.displayName);
    if (user.getRole() != dto.role) {
      user.setRol(dto.role);
    }
    const result = await UserDb.save(user);
    if (dto.role == "PROGRAMMER") {
      try {
        await getProgrammerProfileByUserId(user.getId());
      } catch (error) {
        //Si no existe el perfil entonces se crea
        await createProgrammerProfile({
          bio: "Ninguna por ahora",
          disponibilidad: [],
          specialty: "Ninguna",
          userId: id,
        });
      }
    }
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
