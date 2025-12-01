import { AppError } from "src/shared/AppError";
import { PortafolioDb } from "../db/PortafolioDb";

export const getPortafolioById = async (id:string) => {
  try {
    const result = await PortafolioDb.getById(id);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
