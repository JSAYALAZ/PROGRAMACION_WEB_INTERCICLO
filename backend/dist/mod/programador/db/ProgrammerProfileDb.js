"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgrammerProfileDb = void 0;
const prisma_1 = require("src/shared/prisma");
const AppError_1 = require("src/shared/AppError");
const PerfilProgramador_1 = require("../domain/models/PerfilProgramador");
const Disponibilidad_1 = require("src/mod/disponibilidad/domain/models/Disponibilidad");
exports.ProgrammerProfileDb = {
    async list() {
        try {
            const users = await prisma_1.db.programmerProfile.findMany({
                include: { portfolio: true, available: true },
            });
            //Mapeo a modelos
            const resp = users.map((u) => new PerfilProgramador_1.PerfilProgramador({
                avatarUrl: u.avatarUrl,
                bio: u.bio,
                contactLinks: JSON.stringify(u.contactLinks),
                id: u.id,
                name: u.name,
                portafolioId: u.portfolio?.id || "",
                specialty: u.specialty,
                userId: u.userId,
                disponibilidad: u.available.map((d) => new Disponibilidad_1.Disponibilidad({
                    day: d.day,
                    endMinutes: d.endMinutes,
                    programmerId: d.programmerId,
                    startMinutes: d.startMinutes,
                })),
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
            const prof = await prisma_1.db.programmerProfile.findUnique({
                where: { id },
                include: { portfolio: true, available: true },
            });
            if (!prof)
                throw AppError_1.AppError.notFound();
            //Mapeo a modelos
            const resp = new PerfilProgramador_1.PerfilProgramador({
                avatarUrl: prof.avatarUrl,
                bio: prof.bio,
                contactLinks: JSON.stringify(prof.contactLinks),
                id: prof.id,
                name: prof.name,
                portafolioId: prof.portfolio?.id || "",
                specialty: prof.specialty,
                userId: prof.userId,
                disponibilidad: prof.available.map((d) => new Disponibilidad_1.Disponibilidad({
                    day: d.day,
                    endMinutes: d.endMinutes,
                    programmerId: d.programmerId,
                    startMinutes: d.startMinutes,
                })),
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
    async getByUserId(userId) {
        try {
            const prof = await prisma_1.db.programmerProfile.findUnique({
                where: { userId },
                include: { portfolio: true, available: true },
            });
            if (!prof)
                throw AppError_1.AppError.notFound();
            //Mapeo a modelos
            const resp = new PerfilProgramador_1.PerfilProgramador({
                avatarUrl: prof.avatarUrl,
                bio: prof.bio,
                contactLinks: JSON.stringify(prof.contactLinks),
                id: prof.id,
                name: prof.name,
                portafolioId: prof.portfolio?.id || "",
                specialty: prof.specialty,
                userId: prof.userId,
                disponibilidad: prof.available.map((d) => new Disponibilidad_1.Disponibilidad({
                    day: d.day,
                    endMinutes: d.endMinutes,
                    programmerId: d.programmerId,
                    startMinutes: d.startMinutes,
                })),
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
            const created = await prisma_1.db.programmerProfile.upsert({
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
//# sourceMappingURL=ProgrammerProfileDb.js.map