import { AppError } from "src/shared/AppError";
import { DisponibilidadDb } from "../db/DisponibilidadDb";

export const getDisponibilidadById = async (id: string) => {
  try {
    const result = await DisponibilidadDb.getById(id);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
