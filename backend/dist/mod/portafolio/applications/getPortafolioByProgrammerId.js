"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortafolioByProgrammerId = void 0;
const AppError_1 = require("src/shared/AppError");
const PortafolioDb_1 = require("../db/PortafolioDb");
const getPortafolioByProgrammerId = async (programmerId) => {
    try {
        const portafolio = await PortafolioDb_1.PortafolioDb.getByProgrammerId(programmerId);
        return portafolio;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.getPortafolioByProgrammerId = getPortafolioByProgrammerId;
//# sourceMappingURL=getPortafolioByProgrammerId.js.map