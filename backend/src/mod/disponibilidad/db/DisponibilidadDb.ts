import { db, mapPrismaError } from "src/shared/prisma";
import { AppError } from "src/shared/AppError";
import { DisponibilidadDbDefinition } from "./DisponibilidadDbDefinition";
import { Disponibilidad } from "../domain/models/Disponibilidad";

export const DisponibilidadDb: DisponibilidadDbDefinition = {
  async list() {
    try {
      const users = await db.programmerAvailability.findMany();

      //Mapeo a modelos
      const resp = users.map(
        (u): Disponibilidad =>
          new Disponibilidad({
            day: u.day,
            endMinutes: u.endMinutes,
            startMinutes: u.startMinutes,
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
      const data = await db.programmerAvailability.findUnique({
        where: { id },
      });
      if (!data) throw AppError.notFound();
      //Mapeo a modelos
      const resp = new Disponibilidad({
        day: data.day,
        endMinutes: data.endMinutes,
        startMinutes: data.startMinutes,
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
  async deleteAllFromProgrammer(programmerId) {
    try {
      const created = await db.programmerAvailability.deleteMany({
        where: { programmerId },
      });
    } catch (error) {
      if (error instanceof AppError) throw error;
      const mapped = mapPrismaError(error);
      if (mapped) throw mapped;
      throw AppError.internal();
    }
  },
  async createMany(data) {
    try {
      // const created = await db.programmerAvailability.createMany({
      //   data: data.map(d=>({
          
      //   })),
       
      // });

    } catch (error) {
      if (error instanceof AppError) throw error;
      const mapped = mapPrismaError(error);
      if (mapped) throw mapped;
      throw AppError.internal();
    }
  },
};
