"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const AppError_1 = require("../../../shared/AppError");
const UserDb_1 = require("../db/UserDb");
const getProgrammerProfileByUserId_1 = require("../../programador/applications/getProgrammerProfileByUserId");
const getUserById = async (id) => {
    try {
        let resutl = null;
        try {
            resutl = await UserDb_1.UserDb.getById(id);
        }
        catch (error) { }
        try {
            resutl = await UserDb_1.UserDb.getByFirebaseId(id);
        }
        catch (error) { }
        if (resutl == null) {
            throw AppError_1.AppError.notFound();
        }
        try {
            const profileProgrammer = await (0, getProgrammerProfileByUserId_1.getProgrammerProfileByUserId)(resutl.getId());
            resutl.setProgrammerProfile(profileProgrammer);
        }
        catch (error) { }
        return resutl;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.getUserById = getUserById;
//# sourceMappingURL=getUserById.js.map