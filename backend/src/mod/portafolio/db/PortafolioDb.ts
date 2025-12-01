import { db, mapPrismaError } from "src/shared/prisma";
import { PortafolioDbDefinition } from "./PortafolioDbDefinition";
import { Portafolio } from "../domain/models/Portafolio";
import { AppError } from "src/shared/AppError";

export const PortafolioDb: PortafolioDbDefinition = {
  async list() {
    try {
      const users = await db.portfolio.findMany();
      const resp = users.map(
        (u): Portafolio =>
          new Portafolio({
            description: u.description,
            ownerId: u.ownerId,
            title: u.title,
            id: u.id,
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
      const data = await db.portfolio.findUnique({ where: { id } });
      if (!data) throw AppError.notFound();
      //Mapeo a modelos
      const resp = new Portafolio({
        description: data.description,
        ownerId: data.ownerId,
        title: data.title,
        id: data.id,
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
      const created = await db.portfolio.upsert({
        where: { id: data.getId() },
        create: {
          title: data.getTitle(),
          ownerId: data.getOwnerId(),
          description: data.getDescription(),
        },
        update: {
          title: data.getTitle(),
          description: data.getDescription(),
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
