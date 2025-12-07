"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortafolioById = void 0;
const AppError_1 = require("../../../shared/AppError");
const listProyects_1 = require("../../proyecto/applications/listProyects");
const PortafolioDb_1 = require("../db/PortafolioDb");
const getPortafolioById = async (id) => {
    try {
        const portafolio = await PortafolioDb_1.PortafolioDb.getById(id);
        const projects = await (0, listProyects_1.listProyects)({
            portfolioId: id,
        });
        projects.forEach((p) => {
            portafolio.addProyect(p);
        });
        return portafolio;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.getPortafolioById = getPortafolioById;
//# sourceMappingURL=getPortafolioById.js.map