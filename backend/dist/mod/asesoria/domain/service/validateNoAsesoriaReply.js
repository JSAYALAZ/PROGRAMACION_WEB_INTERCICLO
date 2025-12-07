"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNoAsesoriaReply = validateNoAsesoriaReply;
function validateNoAsesoriaReply(asesoria, existing) {
    const newStart = asesoria.getHour();
    const newEnd = newStart + asesoria.getDurationMin();
    for (const a of existing) {
        const start = a.getHour();
        const end = start + a.getDurationMin();
        if (newStart < end && newEnd > start) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=validateNoAsesoriaReply.js.map