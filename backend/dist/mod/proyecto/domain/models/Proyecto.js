"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proyecto = void 0;
const crypto_1 = require("crypto");
class Proyecto {
    constructor(data) {
        this.id = data.id ?? (0, crypto_1.randomBytes)(12).toString("hex");
        this.section = data.section;
        this.title = data.title;
        this.description = data.description;
        this.participation = data.participation;
        this.repositoryUrl = data.repositoryUrl;
        this.liveDemoUrl = data.liveDemoUrl;
        this.portafolioId = data.portafolioId;
    }
    getId() {
        return this.id;
    }
    getPortafolioId() {
        return this.portafolioId;
    }
    getSeccion() {
        return this.section;
    }
    getTittle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getParticipationType() {
        return this.participation;
    }
    getUrlRepo() {
        return this.repositoryUrl;
    }
    getUrldeploy() {
        return this.liveDemoUrl;
    }
}
exports.Proyecto = Proyecto;
//# sourceMappingURL=Proyecto.js.map