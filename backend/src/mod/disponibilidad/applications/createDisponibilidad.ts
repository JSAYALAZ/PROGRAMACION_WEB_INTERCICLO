import { AppError } from "src/shared/AppError";
import { AvailibilityCreateDTO } from "../api/dto/input";
import { DisponibilidadDb } from "../db/DisponibilidadDb";
import { Disponibilidad } from "../domain/models/Disponibilidad";

export const createDisponibilidad = async (dto: AvailibilityCreateDTO) => {
  try {
    const user = new Disponibilidad({
      cancelled: false,
      date: new Date(dto.date),
      durationMin: dto.durationMin,
      id: null,
      notes: dto.notes,
      programmerId: dto.programmerId,
    });
    const result = await DisponibilidadDb.save(user);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
