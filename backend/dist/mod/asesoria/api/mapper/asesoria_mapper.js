"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesoriaMapper = void 0;
class AsesoriaMapper {
    static map(data) {
        return {
            comment: data.getComment(),
            date: data.getDate().toISOString(),
            durationMin: data.getDurationMin(),
            hour: data.getHour(),
            programmerId: data.getProgrammerId(),
            responseMessage: data.getResponseMessage(),
            status: data.getStatus(),
        };
    }
}
exports.AsesoriaMapper = AsesoriaMapper;
//# sourceMappingURL=asesoria_mapper.js.map