"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAsesorias = void 0;
const AppError_1 = require("src/shared/AppError");
const AsesoriaDB_1 = require("../db/AsesoriaDB");
const AsesoriaFilters_1 = require("../db/AsesoriaFilters");
const listAsesorias = async (q) => {
    try {
        const { filters } = (0, AsesoriaFilters_1.generateAsesoriaFilters)(q || {});
        const result = await AsesoriaDB_1.AsesoriaDB.list(filters);
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.listAsesorias = listAsesorias;
//# sourceMappingURL=listAsesorias.js.map