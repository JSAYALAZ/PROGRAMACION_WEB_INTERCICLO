import { AppError } from "src/shared/AppError";
import { ProyectoDb } from "../db/ProyectoDb";

export const getProyectById = async (id: string) => {
  try {
    const result = await ProyectoDb.getById(id);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
