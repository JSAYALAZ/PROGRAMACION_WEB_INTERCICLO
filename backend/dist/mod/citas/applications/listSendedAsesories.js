"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSendedAsesories = void 0;
const AppError_1 = require("../../../shared/AppError");
const listAsesorias_1 = require("../../asesoria/applications/listAsesorias");
const getUserById_1 = require("../../usuario/applications/getUserById");
const listSendedAsesories = async (userId) => {
    try {
        const user = await (0, getUserById_1.getUserById)(userId);
        const asesories = await (0, listAsesorias_1.listAsesorias)({ requesterId: user.getId() });
        return asesories;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.listSendedAsesories = listSendedAsesories;
//# sourceMappingURL=listSendedAsesories.js.map