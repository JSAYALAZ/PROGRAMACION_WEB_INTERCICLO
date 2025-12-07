"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProgrammerProfile = void 0;
const PerfilProgramador_1 = require("../domain/models/PerfilProgramador");
const ProgrammerProfileDb_1 = require("../db/ProgrammerProfileDb");
const getUserById_1 = require("../../usuario/applications/getUserById");
const Portafolio_1 = require("../../portafolio/domain/models/Portafolio");
const PortafolioDb_1 = require("../../portafolio/db/PortafolioDb");
const AppError_1 = require("../../../shared/AppError");
const createProgrammerProfile = async (dto) => {
    try {
        const user = await (0, getUserById_1.getUserById)(dto.userId);
        const profile = new PerfilProgramador_1.PerfilProgramador({
            avatarUrl: "",
            bio: dto.bio,
            contactLinks: "",
            id: null,
            name: user.getUsername(),
            portafolioId: "",
            specialty: "Frontend",
            userId: dto.userId,
            disponibilidad: [],
        });
        const resultId = await ProgrammerProfileDb_1.ProgrammerProfileDb.save(profile);
        const portaf = new Portafolio_1.Portafolio({
            description: "Nuevo portafolio",
            id: null,
            ownerId: resultId,
            title: "Nuevo portafolip",
        });
        await PortafolioDb_1.PortafolioDb.save(portaf);
        return resultId;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.createProgrammerProfile = createProgrammerProfile;
//# sourceMappingURL=createProgrammerProfile.js.map