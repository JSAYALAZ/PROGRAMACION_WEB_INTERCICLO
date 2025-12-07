
import { AppError } from "../../../shared/AppError";
import { DisponibilidadDbDefinition } from "./DisponibilidadDbDefinition";
import { db, mapPrismaError } from "../../../shared/prisma";

export const DisponibilidadDb: DisponibilidadDbDefinition = {
  async deleteAllFromProgrammer(programmerId) {
    try {
      await db.programmerAvailability.deleteMany({
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
      const inputs = data.map((inp) => ({
        day: inp.getDay(),
        endMinutes: inp.getEndMinutes(),
        programmerId: inp.getProgrammerId(),
        startMinutes: inp.getStartMinutes(),
      }));
      await db.programmerAvailability.createMany({
        data: inputs,
      });
    } catch (error) {
      console.log(error);
      
      if (error instanceof AppError) throw error;
      const mapped = mapPrismaError(error);
      if (mapped) throw mapped;
      throw AppError.internal();
    }
  },
};
