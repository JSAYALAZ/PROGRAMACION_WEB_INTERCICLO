"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsers = void 0;
const AppError_1 = require("../../../shared/AppError");
const UserDb_1 = require("../db/UserDb");
const listUsers = async () => {
    try {
        const result = await UserDb_1.UserDb.list();
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.listUsers = listUsers;
//# sourceMappingURL=listUsers.js.map