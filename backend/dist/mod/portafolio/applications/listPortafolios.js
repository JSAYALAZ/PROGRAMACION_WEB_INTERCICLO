"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPortafolios = void 0;
const AppError_1 = require("../../../shared/AppError");
const PortafolioDb_1 = require("../db/PortafolioDb");
const listPortafolios = async () => {
    try {
        const result = await PortafolioDb_1.PortafolioDb.list();
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.listPortafolios = listPortafolios;
//# sourceMappingURL=listPortafolios.js.map