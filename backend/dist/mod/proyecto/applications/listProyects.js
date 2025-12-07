"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProyects = void 0;
const ProyectoDb_1 = require("../db/ProyectoDb");
const ProyectoFilters_1 = require("../db/ProyectoFilters");
const AppError_1 = require("../../../shared/AppError");
const listProyects = async (q) => {
    try {
        const { filters } = (0, ProyectoFilters_1.generateProyectoFiltres)(q || {});
        const result = await ProyectoDb_1.ProyectoDb.list(filters);
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.listProyects = listProyects;
//# sourceMappingURL=listProyects.js.map