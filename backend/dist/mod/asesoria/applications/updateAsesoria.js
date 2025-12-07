"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAsesoria = void 0;
const AppError_1 = require("src/shared/AppError");
const getAsesoriaById_1 = require("./getAsesoriaById");
const AsesoriaDB_1 = require("../db/AsesoriaDB");
const updateAsesoria = async (id, dto) => {
    try {
        const profile = await (0, getAsesoriaById_1.getAsesoriaById)(id);
        profile.setResponseMessage(dto.responseMessage);
        profile.setStatus(dto.status);
        const resultId = await AsesoriaDB_1.AsesoriaDB.save(profile);
        return resultId;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.updateAsesoria = updateAsesoria;
//# sourceMappingURL=updateAsesoria.js.map