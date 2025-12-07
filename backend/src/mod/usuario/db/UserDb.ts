
import { AppError } from "../../../shared/AppError";
import { Usuario } from "../domain/models/Usuario";
import { UserDbDefinition } from "./UserDbDefinition";
import { db, mapPrismaError } from "../../../shared/prisma";

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
            foto_perfil: u.picture,
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
  async getById(id) {
    try {
      const user = await db.user.findUnique({ where: { id } });
      if (!user) throw AppError.notFound();
      //Mapeo a modelos
      const resp = new Usuario({
        email: user.email,
        firebaseUid: user.firebaseUid,
        foto_perfil: user.picture,
        id: user.id,
        rol: user.role,
        username: user.displayName,
      });

      return resp;
    } catch (error) {
      if (error instanceof AppError) throw error;
      const mapped = mapPrismaError(error);
      if (mapped) throw mapped;
      throw AppError.internal();
    }
  },
  async getByFirebaseId(id) {
    try {
      const user = await db.user.findUnique({ where: { firebaseUid:id } });
      if (!user) throw AppError.notFound();
      //Mapeo a modelos
      const resp = new Usuario({
        email: user.email,
        firebaseUid: user.firebaseUid,
        foto_perfil: user.picture,
        id: user.id,
        rol: user.role,
        username: user.displayName,
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
      const created = await db.user.upsert({
        where: { id: data.getId() },
        create: {
          displayName: data.getUsername(),
          email: data.getEmail(),
          firebaseUid: data.getFirebaseUid(),
          picture: data.getFotoPerfil()
        },
        update: {
          role: data.getRole(),
          displayName: data.getUsername(),
          email: data.getEmail(),
          firebaseUid: data.getFirebaseUid(),
        },
      });
      const resp = new Usuario({
        email: created.email,
        firebaseUid: created.firebaseUid,
        foto_perfil: created.picture,
        id: created.id,
        rol: created.role,
        username: created.displayName,
      });
      return resp;
    } catch (error) {
      if (error instanceof AppError) throw error;
      const mapped = mapPrismaError(error);
      if (mapped) throw mapped;
      throw AppError.internal();
    }
  },
};
