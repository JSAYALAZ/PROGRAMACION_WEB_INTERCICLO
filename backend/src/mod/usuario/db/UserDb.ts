import { db, mapPrismaError } from "src/shared/prisma";
import { Usuario } from "../domain/models/Usuario";
import { AppError } from "src/shared/AppError";
import { UserDbDefinition } from "./UserDbDefinition";
import { Prisma } from "src/generated/prisma/client";

export const UserDb: UserDbDefinition = {
  async list() {
    try {
      const users = await db.user.findMany();

      //Mapeo a modelos
      const resp = users.map(
        (u): Usuario =>
          new Usuario({
            email: u.email,
            firebaseUid: u.firebaseUid,
            foto_perfil: null,
            id: u.id,
            rol: u.role,
            username: u.displayName,
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
      const created = await db.user.upsert({
        where: { id: data.getId() },
        create: {
          displayName: data.getUsername(),
          email: data.getEmail(),
          firebaseUid: data.getFirebaseUid(),
        },
        update: {
          displayName: data.getUsername(),
          email: data.getEmail(),
          firebaseUid: data.getFirebaseUid(),
        },
      });
      return created.id;
    } catch (error) {
      console.log(error);
      
      if (error instanceof AppError) throw error;
      const mapped = mapPrismaError(error);
      if (mapped) throw mapped;
      throw AppError.internal();
    }
  },
};
