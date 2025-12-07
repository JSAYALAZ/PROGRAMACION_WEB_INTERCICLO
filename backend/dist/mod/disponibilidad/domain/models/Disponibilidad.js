"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disponibilidad = void 0;
class Disponibilidad {
    // Getters
    getProgrammerId() {
        return this.programmerId;
    }
    getDay() {
        return this.day;
    }
    getStartMinutes() {
        return this.startMinutes;
    }
    getEndMinutes() {
        return this.endMinutes;
    }
    // Setters
    setProgrammerId(programmerId) {
        this.programmerId = programmerId;
    }
    setDay(day) {
        this.day = day;
    }
    setStartMinutes(startMinutes) {
        this.startMinutes = startMinutes;
    }
    setEndMinutes(endMinutes) {
        this.endMinutes = endMinutes;
    }
    constructor(data) {
        this.programmerId = data.programmerId;
        this.day = data.day;
        this.startMinutes = data.startMinutes;
        this.endMinutes = data.endMinutes;
    }
}
exports.Disponibilidad = Disponibilidad;
//# sourceMappingURL=Disponibilidad.js.map