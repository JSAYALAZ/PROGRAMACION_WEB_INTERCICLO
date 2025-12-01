import { AppError } from "src/shared/AppError";
import { ProyectCreateDTO } from "../api/dto/input";
import { Proyecto } from "../domain/models/Proyecto";
import { ProyectoDb } from "../db/ProyectoDb";
import { getPortafolioById } from "src/mod/portafolio/applications/getPortafolioById";

export const createProyect = async (dto: ProyectCreateDTO) => {
  try {
    await getPortafolioById(dto.portafolioId)
    const user = new Proyecto({
      description: dto.description,
      id: null,
      liveDemoUrl: dto.liveDemoUrl,
      participation: dto.participation,
      portafolioId: dto.portafolioId,
      repositoryUrl: dto.repositoryUrl,
      section: dto.section,
      title: dto.title,
    });
    const result = await ProyectoDb.save(user);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
