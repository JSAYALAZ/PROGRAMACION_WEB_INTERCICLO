"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProyectById = void 0;
const AppError_1 = require("src/shared/AppError");
const ProyectoDb_1 = require("../db/ProyectoDb");
const getProyectById = async (id) => {
    try {
        const result = await ProyectoDb_1.ProyectoDb.getById(id);
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.getProyectById = getProyectById;
//# sourceMappingURL=getProyectById.js.map