
import { AppError } from "@/src/shared/AppError";
import { AsesoriaDB } from "../db/AsesoriaDB";

export const getAsesoriaById = async (id: string) => {
  try {
    const result = await AsesoriaDB.getById(id);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
