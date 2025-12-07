"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const AppError_1 = require("src/shared/AppError");
const UserDb_1 = require("../db/UserDb");
const Usuario_1 = require("../domain/models/Usuario");
const getUserById_1 = require("./getUserById");
const createUser = async (dto) => {
    try {
        let exitingUser = null;
        try {
            exitingUser = await (0, getUserById_1.getUserById)(dto.firebaseUid);
        }
        catch (error) {
            console.warn("Nuevo usuario");
        }
        const user = new Usuario_1.Usuario({
            email: exitingUser?.getEmail() || dto.email,
            firebaseUid: dto.firebaseUid,
            foto_perfil: exitingUser?.getFotoPerfil() || dto.foto_perfil,
            id: exitingUser?.getId() || null,
            rol: exitingUser?.getRole() || "USER",
            username: exitingUser?.getUsername() || dto.displayName,
        });
        const result = await UserDb_1.UserDb.save(user);
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.createUser = createUser;
//# sourceMappingURL=createUser.js.map