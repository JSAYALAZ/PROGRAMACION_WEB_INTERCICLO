import { getUserById } from "src/mod/usuario/applications/getUserById";
import { ProgrammerProfileCreateDTO } from "../api/dto/input";
import { PerfilProgramador } from "../domain/models/PerfilProgramador";
import { ProgrammerProfileDb } from "../db/ProgrammerProfileDb";
import { AppError } from "src/shared/AppError";
import { Portafolio } from "src/mod/portafolio/domain/models/Portafolio";
import { PortafolioDb } from "src/mod/portafolio/db/PortafolioDb";

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
      portafolioId: "",
      specialty: "Frontend",
      userId: dto.userId,
      disponibilidad: [],
    });
    const resultId = await ProgrammerProfileDb.save(profile);
    const portaf = new Portafolio({
      description: "Nuevo portafolio",
      id: null,
      ownerId: resultId,
      title: "Nuevo portafolip",
    });
    await PortafolioDb.save(portaf);
    return resultId;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
