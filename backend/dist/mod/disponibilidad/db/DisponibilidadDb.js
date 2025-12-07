"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisponibilidadDb = void 0;
const AppError_1 = require("../../../shared/AppError");
const prisma_1 = require("../../../shared/prisma");
exports.DisponibilidadDb = {
    async deleteAllFromProgrammer(programmerId) {
        try {
            await prisma_1.db.programmerAvailability.deleteMany({
                where: { programmerId },
            });
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
    async createMany(data) {
        try {
            const inputs = data.map((inp) => ({
                day: inp.getDay(),
                endMinutes: inp.getEndMinutes(),
                programmerId: inp.getProgrammerId(),
                startMinutes: inp.getStartMinutes(),
            }));
            await prisma_1.db.programmerAvailability.createMany({
                data: inputs,
            });
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
//# sourceMappingURL=DisponibilidadDb.js.map