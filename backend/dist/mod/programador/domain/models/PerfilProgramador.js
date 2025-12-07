"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerfilProgramador = void 0;
const crypto_1 = require("crypto");
class PerfilProgramador {
    // Setters
    setUserId(userId) {
        this.userId = userId;
    }
    setName(name) {
        this.name = name;
    }
    setSpecialty(specialty) {
        this.specialty = specialty;
    }
    setBio(bio) {
        this.bio = bio;
    }
    setAvatarUrl(avatarUrl) {
        this.avatarUrl = avatarUrl;
    }
    setContactLinks(contactLinks) {
        this.contactLinks = contactLinks;
    }
    setPortafolioId(portafolioId) {
        this.portafolioId = portafolioId;
    }
    // Getters
    getDisponibilidad() {
        return this.disponibilidad;
    }
    constructor(data) {
        this.id = data.id ?? (0, crypto_1.randomBytes)(12).toString("hex");
        this.userId = data.userId;
        this.name = data.name;
        this.specialty = data.specialty;
        this.bio = data.bio;
        this.avatarUrl = data.avatarUrl;
        this.contactLinks = data.contactLinks;
        this.portafolioId = data.portafolioId;
        this.disponibilidad = data.disponibilidad;
    }
    // Getters
    getId() {
        return this.id;
    }
    // Getters
    getUserId() {
        return this.userId;
    }
    getName() {
        return this.name;
    }
    getSpecialty() {
        return this.specialty;
    }
    getBio() {
        return this.bio;
    }
    getAvatarUrl() {
        return this.avatarUrl;
    }
    getContactLinks() {
        return this.contactLinks;
    }
    getPortafolioId() {
        return this.portafolioId;
    }
}
exports.PerfilProgramador = PerfilProgramador;
//# sourceMappingURL=PerfilProgramador.js.map