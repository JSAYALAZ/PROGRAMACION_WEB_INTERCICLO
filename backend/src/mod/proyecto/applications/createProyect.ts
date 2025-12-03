import { AppError } from "src/shared/AppError";
import { ProyectCreateDTO } from "../api/dto/input";
import { Proyecto } from "../domain/models/Proyecto";
import { ProyectoDb } from "../db/ProyectoDb";
import { getUserById } from "src/mod/usuario/applications/getUserById";
import { getPortafolioByProgrammerId } from "src/mod/portafolio/applications/getPortafolioByProgrammerId";

export const createProyect = async (dto: ProyectCreateDTO) => {
  try {
    const user = await getUserById(dto.userId);
    if (user.getRole() != "PROGRAMMER") {
      throw AppError.unauthorized();
    }
    const portafolio = await getPortafolioByProgrammerId(
      user.getProgrammerProfile()?.getId() || ""
    );
    const proy = new Proyecto({
      description: dto.description,
      id: null,
      liveDemoUrl: dto.liveDemoUrl,
      participation: dto.participation,
      portafolioId: portafolio.getId(),
      repositoryUrl: dto.repositoryUrl,
      section: dto.section,
      title: dto.title,
    });
    const result = await ProyectoDb.save(proy);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
