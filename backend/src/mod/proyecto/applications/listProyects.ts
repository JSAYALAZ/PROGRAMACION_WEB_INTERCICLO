import { AppError } from "src/shared/AppError";
import { ProyectoDb } from "../db/ProyectoDb";

export const listProyects = async () => {
  try {
    const result = await ProyectoDb.list();
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
