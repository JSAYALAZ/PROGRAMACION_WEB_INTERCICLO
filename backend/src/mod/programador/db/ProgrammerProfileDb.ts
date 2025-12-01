import { db, mapPrismaError } from "src/shared/prisma";
import { AppError } from "src/shared/AppError";
import { ProgrammerProfileDbDefinition } from "./ProgrammerProfileDbDefinition";
import { PerfilProgramador } from "../domain/models/PerfilProgramador";

export const ProgrammerProfileDb: ProgrammerProfileDbDefinition = {
  async list() {
    try {
      const users = await db.programmerProfile.findMany({
        include: { portfolio: true },
      });

      //Mapeo a modelos
      const resp = users.map(
        (u): PerfilProgramador =>
          new PerfilProgramador({
            avatarUrl: u.avatarUrl,
            bio: u.bio,
            contactLinks: JSON.stringify(u.contactLinks),
            id: u.id,
            name: u.name,
            portafolioId: u.portfolio?.id || null,
            specialty: u.specialty,
            userId: u.userId,
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
      const user = await db.programmerProfile.findUnique({
        where: { id },
        include: { portfolio: true },
      });
      if (!user) throw AppError.notFound();
      //Mapeo a modelos
      const resp = new PerfilProgramador({
        avatarUrl: user.avatarUrl,
        bio: user.bio,
        contactLinks: JSON.stringify(user.contactLinks),
        id: user.id,
        name: user.name,
        portafolioId: user.portfolio?.id || null,
        specialty: user.specialty,
        userId: user.userId,
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
      const created = await db.programmerProfile.upsert({
        where: { id: data.getId() },
        create: {
          name: data.getName(),
          avatarUrl: data.getAvatarUrl(),
          bio: data.getBio(),
          specialty: data.getSpecialty(),
          userId: data.getUserId(),
        },
        update: {
          name: data.getName(),
          avatarUrl: data.getAvatarUrl(),
          bio: data.getBio(),
          specialty: data.getSpecialty(),
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
