"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDisponibilidadById = void 0;
const AppError_1 = require("src/shared/AppError");
const DisponibilidadDb_1 = require("../db/DisponibilidadDb");
const getDisponibilidadById = async (id) => {
    try {
        const result = await DisponibilidadDb_1.DisponibilidadDb.getById(id);
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.getDisponibilidadById = getDisponibilidadById;
//# sourceMappingURL=getDisponibilidadById.js.map