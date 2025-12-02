import { getUserById } from "src/mod/usuario/applications/getUserById";
import { ProgrammerProfileCreateDTO } from "../api/dto/input";
import { PerfilProgramador } from "../domain/models/PerfilProgramador";
import { ProgrammerProfileDb } from "../db/ProgrammerProfileDb";
import { AppError } from "src/shared/AppError";

export const createProgrammerProfile = async (
  dto: ProgrammerProfileCreateDTO
) => {
  try {
    const user = await getUserById(dto.userId);
    const profile = new PerfilProgramador({
      avatarUrl: "",
      bio: dto.bio,
      contactLinks: "",
      id: null,
      name: user.getUsername(),
      portafolioId: null,
      specialty: "Frontend",
      userId: dto.userId,
      disponibilidad:[]
    });
    const result = await ProgrammerProfileDb.save(profile);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
