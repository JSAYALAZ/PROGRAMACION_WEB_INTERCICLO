import { db, mapPrismaError } from "src/shared/prisma";
import { AppError } from "src/shared/AppError";
import { DisponibilidadDbDefinition } from "./DisponibilidadDbDefinition";
import { Disponibilidad } from "../domain/models/Disponibilidad";

export const DisponibilidadDb: DisponibilidadDbDefinition = {
  async list() {
    try {
      const users = await db.availability.findMany();

      //Mapeo a modelos
      const resp = users.map(
        (u): Disponibilidad =>
          new Disponibilidad({
            id: u.id,
            cancelled: u.cancelled,
            date: u.date,
            durationMin: u.durationMin,
            notes: u.notes,
            programmerId: u.programmerId,
          })
      );
      return resp;
    } catch (error) {
      if (error instanceof AppError) throw error;
      const mapped = mapPrismaError(error);
      if (mapped) throw mapped;
      throw AppError.internal();
    }
  },
  async getById(id) {
    try {
      const data = await db.availability.findUnique({ where: { id } });
      if (!data) throw AppError.notFound();
      //Mapeo a modelos
      const resp = new Disponibilidad({
        id: data.id,
        cancelled: data.cancelled,
        date: data.date,
        durationMin: data.durationMin,
        notes: data.notes,
        programmerId: data.programmerId,
      });

      return resp;
    } catch (error) {
      if (error instanceof AppError) throw error;
      const mapped = mapPrismaError(error);
      if (mapped) throw mapped;
      throw AppError.internal();
    }
  },
  async save(data) {
    try {
      const created = await db.availability.upsert({
        where: { id: data.getId() },
        create: {
          date: data.getDate().toISOString(),
          durationMin: data.getDurationMin(),
          notes: data.getNotes(),
          programmerId: data.getProgrammerId(),
        },
        update: {
          durationMin: data.getDurationMin(),
          notes: data.getNotes(),
          cancelled: data.getCancelled(),
        },
      });
      return created.id;
    } catch (error) {
      if (error instanceof AppError) throw error;
      const mapped = mapPrismaError(error);
      if (mapped) throw mapped;
      throw AppError.internal();
    }
  },
};
