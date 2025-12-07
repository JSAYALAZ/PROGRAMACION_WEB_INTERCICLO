"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortafolioMapper = void 0;
const proyecto_mapper_1 = require("../../../../mod/proyecto/api/mapper/proyecto_mapper");
class PortafolioMapper {
    static map(data) {
        return {
            description: data.getDescription(),
            id: data.getId(),
            ownerId: data.getOwnerId(),
            title: data.getTitle(),
            project: data.getProyects().map((p) => proyecto_mapper_1.ProyectoMapper.map(p)),
        };
    }
}
exports.PortafolioMapper = PortafolioMapper;
//# sourceMappingURL=portafolio_mapper.js.map