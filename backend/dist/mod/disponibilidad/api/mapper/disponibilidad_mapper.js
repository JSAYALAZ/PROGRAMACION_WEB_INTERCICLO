"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisponibilidadMapper = void 0;
class DisponibilidadMapper {
    static map(data) {
        return {
            day: data.getDay(),
            endMinuts: data.getEndMinutes(),
            startMinuts: data.getStartMinutes(),
        };
    }
}
exports.DisponibilidadMapper = DisponibilidadMapper;
//# sourceMappingURL=disponibilidad_mapper.js.map