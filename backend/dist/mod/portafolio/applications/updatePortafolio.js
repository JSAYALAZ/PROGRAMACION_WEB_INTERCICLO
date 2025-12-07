"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePortafolio = void 0;
const AppError_1 = require("../../../shared/AppError");
const PortafolioDb_1 = require("../db/PortafolioDb");
const getPortafolioById_1 = require("./getPortafolioById");
const updatePortafolio = async (id, dto) => {
    try {
        const port = await (0, getPortafolioById_1.getPortafolioById)(id);
        port.setDescription(dto.description);
        port.setTitle(dto.title);
        const result = await PortafolioDb_1.PortafolioDb.save(port);
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.updatePortafolio = updatePortafolio;
//# sourceMappingURL=updatePortafolio.js.map