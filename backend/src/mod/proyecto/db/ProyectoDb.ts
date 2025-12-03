import { db, mapPrismaError } from "src/shared/prisma";
import { AppError } from "src/shared/AppError";
import { ProyectoDbDefinition } from "./ProyectoDbDefinition";
import { Proyecto } from "../domain/models/Proyecto";

export const ProyectoDb: ProyectoDbDefinition = {
  async list(filters) {
    try {
      const datas = await db.project.findMany({
        ...filters
      });

      //Mapeo a modelos
      const resp = datas.map(
        (u): Proyecto =>
          new Proyecto({
            id: u.id,
            description: u.description,
            liveDemoUrl: u.liveDemoUrl,
            portafolioId: u.portfolioId,
            repositoryUrl: u.repositoryUrl,
            section: u.section,
            participation: u.participation,
            title: u.title,
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
      const data = await db.project.findUnique({ where: { id } });
      if (!data) throw AppError.notFound();
      //Mapeo a modelos
      const resp = new Proyecto({
        id: data.id,
        description: data.description,
        liveDemoUrl: data.liveDemoUrl,
        portafolioId: data.portfolioId,
        repositoryUrl: data.repositoryUrl,
        section: data.section,
        participation: data.participation,
        title: data.title,
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
      const created = await db.project.upsert({
        where: { id: data.getId() },
        create: {
          description: data.getDescription(),
          participation: data.getParticipationType(),
          title: data.getTittle(),
          liveDemoUrl: data.getUrldeploy(),
          repositoryUrl: data.getUrlRepo(),
          portfolioId: data.getPortafolioId(),
        },
        update: {
          description: data.getDescription(),
          participation: data.getParticipationType(),
          title: data.getTittle(),
          liveDemoUrl: data.getUrldeploy(),
          repositoryUrl: data.getUrlRepo(),
          portfolioId: data.getPortafolioId(),
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
