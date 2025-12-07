"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portafolio = void 0;
const crypto_1 = require("crypto");
class Portafolio {
    setTitle(title) {
        this.title = title;
    }
    // Setters
    setDescription(description) {
        this.description = description;
    }
    constructor(data) {
        this.projects = [];
        this.id = data.id ?? (0, crypto_1.randomBytes)(12).toString("hex");
        this.ownerId = data.ownerId;
        this.title = data.title;
        this.description = data.description;
    }
    getId() {
        return this.id;
    }
    // Getters
    getOwnerId() {
        return this.ownerId;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    addProyect(data) {
        this.projects.push(data);
    }
    getProyects() {
        return this.projects;
    }
}
exports.Portafolio = Portafolio;
//# sourceMappingURL=Portafolio.js.map