
import { AppError } from "@/src/shared/AppError";
import { listProyects } from "../../proyecto/applications/listProyects";
import { PortafolioDb } from "../db/PortafolioDb";

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
