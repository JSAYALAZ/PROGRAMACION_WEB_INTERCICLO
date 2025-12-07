"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesoriaDB = void 0;
const prisma_1 = require("src/shared/prisma");
const AppError_1 = require("src/shared/AppError");
const Asesoria_1 = require("../domain/models/Asesoria");
const utils_1 = require("src/shared/utils");
exports.AsesoriaDB = {
    async getById(id) {
        try {
            const data = await prisma_1.db.booking.findUnique({ where: { id } });
            if (!data)
                throw AppError_1.AppError.notFound();
            const resp = new Asesoria_1.Asesoria({
                comment: data.comment,
                date: (0, utils_1.fechaActual)(data.date),
                durationMin: data.durationMin,
                programmerId: data.programmerId,
                requesterId: data.requesterId,
                responseMessage: data.responseMessage,
                status: data.status,
                id: data.id,
            });
            return resp;
        }
        catch (error) {
            console.log(error);
            if (error instanceof AppError_1.AppError)
                throw error;
            const mapped = (0, prisma_1.mapPrismaError)(error);
            if (mapped)
                throw mapped;
            throw AppError_1.AppError.internal();
        }
    },
    async list(filters) {
        try {
            const data = await prisma_1.db.booking.findMany({ ...filters });
            const resp = data.map((d) => new Asesoria_1.Asesoria({
                comment: d.comment,
                date: (0, utils_1.fechaActual)(d.date),
                durationMin: d.durationMin,
                programmerId: d.programmerId,
                requesterId: d.requesterId,
                responseMessage: d.responseMessage,
                status: d.status,
                id: d.id,
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
    async save(data) {
        try {
            const resp = await prisma_1.db.booking.upsert({
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
        }
        catch (error) {
            console.log(error);
            if (error instanceof AppError_1.AppError)
                throw error;
            const mapped = (0, prisma_1.mapPrismaError)(error);
            if (mapped)
                throw mapped;
            throw AppError_1.AppError.internal();
        }
    },
};
//# sourceMappingURL=AsesoriaDB.js.map