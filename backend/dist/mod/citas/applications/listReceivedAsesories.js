"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listReceivedAsesories = void 0;
const AppError_1 = require("../../../shared/AppError");
const getUserById_1 = require("../../usuario/applications/getUserById");
const getPortafolioByProgrammerId_1 = require("../../portafolio/applications/getPortafolioByProgrammerId");
const listAsesorias_1 = require("../../asesoria/applications/listAsesorias");
const listReceivedAsesories = async (userId) => {
    try {
        const user = await (0, getUserById_1.getUserById)(userId);
        if (user.getRole() != "PROGRAMMER") {
            throw AppError_1.AppError.unauthorized();
        }
        const portafolio = await (0, getPortafolioByProgrammerId_1.getPortafolioByProgrammerId)(user.getProgrammerProfile()?.getId() || "");
        const result = await (0, listAsesorias_1.listAsesorias)({
            programmerId: portafolio.getOwnerId(),
        });
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.listReceivedAsesories = listReceivedAsesories;
//# sourceMappingURL=listReceivedAsesories.js.map