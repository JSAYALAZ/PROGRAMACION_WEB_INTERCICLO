"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAsesoriaById = void 0;
const AppError_1 = require("../../../shared/AppError");
const AsesoriaDB_1 = require("../db/AsesoriaDB");
const getAsesoriaById = async (id) => {
    try {
        const result = await AsesoriaDB_1.AsesoriaDB.getById(id);
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.getAsesoriaById = getAsesoriaById;
//# sourceMappingURL=getAsesoriaById.js.map