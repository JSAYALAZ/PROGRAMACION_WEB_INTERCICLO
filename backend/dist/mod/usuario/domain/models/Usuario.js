"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const AppError_1 = require("../../../../shared/AppError");
const crypto_1 = require("crypto");
class Usuario {
    // Setters
    setUsername(username) {
        this.username = username;
    }
    setEmail(email) {
        this.email = email;
    }
    setRol(rol) {
        if (this.rol != "USER") {
            throw AppError_1.AppError.unauthorized("No se puede actualizar el rol de este usuario");
        }
        this.rol = rol;
    }
    constructor(data) {
        this.programmerProfile = null;
        this.redesSociales = [];
        this.id = data.id ?? (0, crypto_1.randomBytes)(12).toString("hex");
        this.firebaseUid = data.firebaseUid;
        this.username = data.username;
        this.foto_perfil = data.foto_perfil;
        this.email = data.email;
        this.rol = data.rol;
    }
    getRole() {
        return this.rol;
    }
    getId() {
        return this.id;
    }
    getUsername() {
        return this.username;
    }
    getFirebaseUid() {
        return this.firebaseUid;
    }
    getFotoPerfil() {
        return this.foto_perfil;
    }
    getEmail() {
        return this.email;
    }
    getProgrammerProfile() {
        return this.programmerProfile;
    }
    setProgrammerProfile(prof) {
        this.programmerProfile = prof;
    }
    addRedSocial(red) {
        this.redesSociales.push(red);
    }
    getRedSocial() {
        return this.redesSociales;
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map