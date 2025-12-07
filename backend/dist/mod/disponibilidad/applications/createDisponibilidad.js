"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDisponibilidad = void 0;
const AppError_1 = require("src/shared/AppError");
const DisponibilidadDb_1 = require("../db/DisponibilidadDb");
const Disponibilidad_1 = require("../domain/models/Disponibilidad");
const createDisponibilidad = async (dto) => {
    try {
        const user = new Disponibilidad_1.Disponibilidad({
            cancelled: false,
            date: new Date(dto.date),
            durationMin: dto.durationMin,
            id: null,
            notes: dto.notes,
            programmerId: dto.programmerId,
        });
        const result = await DisponibilidadDb_1.DisponibilidadDb.save(user);
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.createDisponibilidad = createDisponibilidad;
//# sourceMappingURL=createDisponibilidad.js.map