import { AppError } from "src/shared/AppError";
import { UserUpdateDTO } from "../api/dto/input";
import { UserDb } from "../db/UserDb";
import { getUserById } from "./getUserById";
import { createProgrammerProfile } from "src/mod/programador/applications/createProgrammerProfile";

export const updateUser = async (id: string, dto: UserUpdateDTO) => {
  try {
    const user = await getUserById(id);
    user.setUsername(dto.displayName);
    user.setRol(dto.role);
    const result = await UserDb.save(user);
    if (dto.role == "PROGRAMMER") {
      await createProgrammerProfile({
        bio: "Ninguna por ahora",
        disponibilidad: [],
        specialty: "Ninguna",
        userId: id,
      });
    }
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
