
import { AppError } from "../../../shared/AppError";
import { PortafolioDb } from "../db/PortafolioDb";

export const getPortafolioByProgrammerId = async (programmerId: string) => {
  try {
    const portafolio = await PortafolioDb.getByProgrammerId(programmerId);
    return portafolio;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
