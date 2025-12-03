import { AppError } from "src/shared/AppError";
import { PortafolioDb } from "../db/PortafolioDb";
import { listProyects } from "src/mod/proyecto/applications/listProyects";

export const getPortafolioById = async (id: string) => {
  try {
    const portafolio = await PortafolioDb.getById(id);
    const projects = await listProyects({
      portfolioId: id,
    });
    projects.forEach((p) => {
      portafolio.addProyect(p);
    });
    return portafolio;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
