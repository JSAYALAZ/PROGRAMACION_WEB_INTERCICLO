import { AppError } from "src/shared/AppError";
import { ProyectoDb } from "../db/ProyectoDb";
import { ProyectFiltersDTO } from "../api/dto/input";
import { generateProyectoFiltres } from "../db/ProyectoFilters";

export const listProyects = async (q?: ProyectFiltersDTO) => {
  try {
    const { filters } = generateProyectoFiltres(q||{});
    const result = await ProyectoDb.list(filters);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
