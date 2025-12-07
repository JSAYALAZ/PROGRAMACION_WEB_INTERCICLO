"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgrammerMapper = void 0;
const disponibilidad_mapper_1 = require("../../../../mod/disponibilidad/api/mapper/disponibilidad_mapper");
class ProgrammerMapper {
    static map(data) {
        return {
            avatarUrl: data.getAvatarUrl(),
            bio: data.getBio(),
            contactLinks: data.getContactLinks(),
            disponibilidad: data
                .getDisponibilidad()
                .map((d) => disponibilidad_mapper_1.DisponibilidadMapper.map(d)),
            id: data.getId(),
            name: data.getName(),
            portafolioId: data.getPortafolioId(),
            specialty: data.getSpecialty(),
            userId: data.getUserId(),
        };
    }
}
exports.ProgrammerMapper = ProgrammerMapper;
//# sourceMappingURL=programmer_mapper.js.map