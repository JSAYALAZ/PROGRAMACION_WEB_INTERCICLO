"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPortafolio = void 0;
const AppError_1 = require("../../../shared/AppError");
const getProgrammerProfileById_1 = require("../../programador/applications/getProgrammerProfileById");
const PortafolioDb_1 = require("../db/PortafolioDb");
const Portafolio_1 = require("../domain/models/Portafolio");
const createPortafolio = async (dto) => {
    try {
        await (0, getProgrammerProfileById_1.getProgrammerProfileById)(dto.programmerProfileId);
        const user = new Portafolio_1.Portafolio({
            description: dto.description,
            id: null,
            ownerId: dto.programmerProfileId,
            title: dto.title,
        });
        const result = await PortafolioDb_1.PortafolioDb.save(user);
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.createPortafolio = createPortafolio;
//# sourceMappingURL=createPortafolio.js.map