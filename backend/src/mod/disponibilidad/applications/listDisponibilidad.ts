import { AppError } from "src/shared/AppError";
import { DisponibilidadDb } from "../db/DisponibilidadDb";

export const listDisponibilidad = async () => {
  try {
    const result = await DisponibilidadDb.list();
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
