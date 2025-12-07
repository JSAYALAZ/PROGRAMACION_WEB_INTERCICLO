"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const AppError_1 = require("src/shared/AppError");
const UserDb_1 = require("../db/UserDb");
const getUserById_1 = require("./getUserById");
const createProgrammerProfile_1 = require("src/mod/programador/applications/createProgrammerProfile");
const getProgrammerProfileByUserId_1 = require("src/mod/programador/applications/getProgrammerProfileByUserId");
const updateUser = async (id, dto) => {
    try {
        const user = await (0, getUserById_1.getUserById)(id);
        user.setUsername(dto.displayName);
        if (user.getRole() != dto.role) {
            user.setRol(dto.role);
        }
        const result = await UserDb_1.UserDb.save(user);
        if (dto.role == "PROGRAMMER") {
            try {
                await (0, getProgrammerProfileByUserId_1.getProgrammerProfileByUserId)(user.getId());
            }
            catch (error) {
                //Si no existe el perfil entonces se crea
                await (0, createProgrammerProfile_1.createProgrammerProfile)({
                    bio: "Ninguna por ahora",
                    disponibilidad: [],
                    specialty: "Ninguna",
                    userId: id,
                });
            }
        }
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.updateUser = updateUser;
//# sourceMappingURL=updateUser.js.map