"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDb = void 0;
const AppError_1 = require("../../../shared/AppError");
const Usuario_1 = require("../domain/models/Usuario");
const prisma_1 = require("../../../shared/prisma");
exports.UserDb = {
    async list() {
        try {
            const users = await prisma_1.db.user.findMany();
            //Mapeo a modelos
            const resp = users.map((u) => new Usuario_1.Usuario({
                email: u.email,
                firebaseUid: u.firebaseUid,
                foto_perfil: u.picture,
                id: u.id,
                rol: u.role,
                username: u.displayName,
            }));
            return resp;
        }
        catch (error) {
            if (error instanceof AppError_1.AppError)
                throw error;
            const mapped = (0, prisma_1.mapPrismaError)(error);
            if (mapped)
                throw mapped;
            throw AppError_1.AppError.internal();
        }
    },
    async getById(id) {
        try {
            const user = await prisma_1.db.user.findUnique({ where: { id } });
            if (!user)
                throw AppError_1.AppError.notFound();
            //Mapeo a modelos
            const resp = new Usuario_1.Usuario({
                email: user.email,
                firebaseUid: user.firebaseUid,
                foto_perfil: user.picture,
                id: user.id,
                rol: user.role,
                username: user.displayName,
            });
            return resp;
        }
        catch (error) {
            if (error instanceof AppError_1.AppError)
                throw error;
            const mapped = (0, prisma_1.mapPrismaError)(error);
            if (mapped)
                throw mapped;
            throw AppError_1.AppError.internal();
        }
    },
    async getByFirebaseId(id) {
        try {
            const user = await prisma_1.db.user.findUnique({ where: { firebaseUid: id } });
            if (!user)
                throw AppError_1.AppError.notFound();
            //Mapeo a modelos
            const resp = new Usuario_1.Usuario({
                email: user.email,
                firebaseUid: user.firebaseUid,
                foto_perfil: user.picture,
                id: user.id,
                rol: user.role,
                username: user.displayName,
            });
            return resp;
        }
        catch (error) {
            if (error instanceof AppError_1.AppError)
                throw error;
            const mapped = (0, prisma_1.mapPrismaError)(error);
            if (mapped)
                throw mapped;
            throw AppError_1.AppError.internal();
        }
    },
    async save(data) {
        try {
            const created = await prisma_1.db.user.upsert({
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
            const resp = new Usuario_1.Usuario({
                email: created.email,
                firebaseUid: created.firebaseUid,
                foto_perfil: created.picture,
                id: created.id,
                rol: created.role,
                username: created.displayName,
            });
            return resp;
        }
        catch (error) {
            if (error instanceof AppError_1.AppError)
                throw error;
            const mapped = (0, prisma_1.mapPrismaError)(error);
            if (mapped)
                throw mapped;
            throw AppError_1.AppError.internal();
        }
    },
};
//# sourceMappingURL=UserDb.js.map