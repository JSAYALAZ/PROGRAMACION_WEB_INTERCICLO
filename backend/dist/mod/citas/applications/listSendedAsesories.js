"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSendedAsesories = void 0;
const AppError_1 = require("src/shared/AppError");
const getUserById_1 = require("src/mod/usuario/applications/getUserById");
const listAsesorias_1 = require("src/mod/asesoria/applications/listAsesorias");
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