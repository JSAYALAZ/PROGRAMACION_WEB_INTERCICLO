"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProyect = void 0;
const AppError_1 = require("src/shared/AppError");
const Proyecto_1 = require("../domain/models/Proyecto");
const ProyectoDb_1 = require("../db/ProyectoDb");
const getUserById_1 = require("src/mod/usuario/applications/getUserById");
const getPortafolioByProgrammerId_1 = require("src/mod/portafolio/applications/getPortafolioByProgrammerId");
const createProyect = async (dto) => {
    try {
        const user = await (0, getUserById_1.getUserById)(dto.userId);
        if (user.getRole() != "PROGRAMMER") {
            throw AppError_1.AppError.unauthorized();
        }
        const portafolio = await (0, getPortafolioByProgrammerId_1.getPortafolioByProgrammerId)(user.getProgrammerProfile()?.getId() || "");
        const proy = new Proyecto_1.Proyecto({
            description: dto.description,
            id: null,
            liveDemoUrl: dto.liveDemoUrl,
            participation: dto.participation,
            portafolioId: portafolio.getId(),
            repositoryUrl: dto.repositoryUrl,
            section: dto.section,
            title: dto.title,
        });
        const result = await ProyectoDb_1.ProyectoDb.save(proy);
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.createProyect = createProyect;
//# sourceMappingURL=createProyect.js.map