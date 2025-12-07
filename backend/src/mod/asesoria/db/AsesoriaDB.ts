import { db, mapPrismaError } from "src/shared/prisma";
import { AppError } from "src/shared/AppError";
import { AsesoriaDBDefinition } from "./AsesoriaDBDefinition";
import { Asesoria } from "../domain/models/Asesoria";
import { fechaActual } from "src/shared/utils";

export const AsesoriaDB: AsesoriaDBDefinition = {
  async getById(id) {
    try {
      const data = await db.booking.findUnique({ where: { id } });
      if (!data) throw AppError.notFound();
      const resp = new Asesoria({
        comment: data.comment,
        date: fechaActual(data.date),
        durationMin: data.durationMin,
        programmerId: data.programmerId,
        requesterId: data.requesterId,
        responseMessage: data.responseMessage,
        status: data.status,
        id: data.id,
      });
      return resp;
    } catch (error) {
      console.log(error);

      if (error instanceof AppError) throw error;
      const mapped = mapPrismaError(error);
      if (mapped) throw mapped;
      throw AppError.internal();
    }
  },
  async list(filters) {
    try {
      const data = await db.booking.findMany({ ...filters });
      const resp = data.map(
        (d) =>
          new Asesoria({
            comment: d.comment,
            date: fechaActual(d.date),
            durationMin: d.durationMin,
            programmerId: d.programmerId,
            requesterId: d.requesterId,
            responseMessage: d.responseMessage,
            status: d.status,
            id: d.id,
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
  async save(data) {
    try {
      const resp = await db.booking.upsert({
        where: { id: data.getId() },
        create: {
          date: data.getDate(),
          durationMin: data.getDurationMin(),
          hour: data.getHour(),
          weekday: data.getWeekday(),
          comment: data.getComment(),
          programmerId: data.getProgrammerId(),
          requesterId: data.getRequesterId(),
          status: data.getStatus(),
        },
        update: {
          status: data.getStatus(),
          responseMessage: data.getResponseMessage(),
        },
      });
      return resp.id;
    } catch (error) {
      console.log(error);

      if (error instanceof AppError) throw error;
      const mapped = mapPrismaError(error);
      if (mapped) throw mapped;
      throw AppError.internal();
    }
  },
};
