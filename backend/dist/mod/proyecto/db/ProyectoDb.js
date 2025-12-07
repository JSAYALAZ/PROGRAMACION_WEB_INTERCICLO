"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoDb = void 0;
const Proyecto_1 = require("../domain/models/Proyecto");
const AppError_1 = require("../../../shared/AppError");
const prisma_1 = require("../../../shared/prisma");
exports.ProyectoDb = {
    async list(filters) {
        try {
            const datas = await prisma_1.db.project.findMany({
                ...filters
            });
            //Mapeo a modelos
            const resp = datas.map((u) => new Proyecto_1.Proyecto({
                id: u.id,
                description: u.description,
                liveDemoUrl: u.liveDemoUrl,
                portafolioId: u.portfolioId,
                repositoryUrl: u.repositoryUrl,
                section: u.section,
                participation: u.participation,
                title: u.title,
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
            const data = await prisma_1.db.project.findUnique({ where: { id } });
            if (!data)
                throw AppError_1.AppError.notFound();
            //Mapeo a modelos
            const resp = new Proyecto_1.Proyecto({
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
            const created = await prisma_1.db.project.upsert({
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
//# sourceMappingURL=ProyectoDb.js.map