"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortafolioDb = void 0;
const prisma_1 = require("src/shared/prisma");
const Portafolio_1 = require("../domain/models/Portafolio");
const AppError_1 = require("src/shared/AppError");
exports.PortafolioDb = {
    async list() {
        try {
            const users = await prisma_1.db.portfolio.findMany();
            const resp = users.map((u) => new Portafolio_1.Portafolio({
                description: u.description,
                ownerId: u.ownerId,
                title: u.title,
                id: u.id,
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
            const data = await prisma_1.db.portfolio.findUnique({ where: { id } });
            if (!data)
                throw AppError_1.AppError.notFound();
            //Mapeo a modelos
            const resp = new Portafolio_1.Portafolio({
                description: data.description,
                ownerId: data.ownerId,
                title: data.title,
                id: data.id,
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
    async getByProgrammerId(ownerId) {
        try {
            const data = await prisma_1.db.portfolio.findUnique({ where: { ownerId } });
            if (!data)
                throw AppError_1.AppError.notFound();
            //Mapeo a modelos
            const resp = new Portafolio_1.Portafolio({
                description: data.description,
                ownerId: data.ownerId,
                title: data.title,
                id: data.id,
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
            const created = await prisma_1.db.portfolio.upsert({
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
//# sourceMappingURL=PortafolioDb.js.map