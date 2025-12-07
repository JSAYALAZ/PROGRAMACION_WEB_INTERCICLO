"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asesoria = void 0;
const utils_1 = require("../../../../shared/utils");
const crypto_1 = require("crypto");
class Asesoria {
    // Getters
    getId() {
        return this.id;
    }
    // Setters
    setStatus(status) {
        this.status = status;
    }
    setResponseMessage(responseMessage) {
        this.responseMessage = responseMessage;
    }
    // Getters
    getHour() {
        return this.hour;
    }
    // Setters
    setHour(hour) {
        this.hour = hour;
    }
    constructor(data) {
        this.id = data.id ?? (0, crypto_1.randomBytes)(12).toString("hex");
        this.requesterId = data.requesterId;
        this.programmerId = data.programmerId;
        this.date = new Date(data.date);
        this.hour = (0, utils_1.timeToMinutes)(data.date) || 12;
        this.weekday = (0, utils_1.getDayInDate)(data.date) || "MON";
        this.durationMin = data.durationMin;
        this.comment = data.comment;
        this.status = data.status;
        this.responseMessage = data.responseMessage;
    }
    // Getters
    getRequesterId() {
        return this.requesterId;
    }
    getProgrammerId() {
        return this.programmerId;
    }
    getDate() {
        return this.date;
    }
    getWeekday() {
        return this.weekday;
    }
    getDurationMin() {
        return this.durationMin;
    }
    getComment() {
        return this.comment;
    }
    getStatus() {
        return this.status;
    }
    getResponseMessage() {
        return this.responseMessage;
    }
}
exports.Asesoria = Asesoria;
//# sourceMappingURL=Asesoria.js.map