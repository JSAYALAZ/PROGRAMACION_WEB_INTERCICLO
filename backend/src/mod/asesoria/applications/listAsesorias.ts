
import { AsesoriaDB } from "../db/AsesoriaDB";
import { AsesoriaFiltersDTO } from "../api/dto/input";
import { generateAsesoriaFilters } from "../db/AsesoriaFilters";
import { AppError } from "../../../shared/AppError";

export const listAsesorias = async (q?: AsesoriaFiltersDTO) => {
  try {
    const { filters } = generateAsesoriaFilters(q || {});
    const result = await AsesoriaDB.list(filters);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
