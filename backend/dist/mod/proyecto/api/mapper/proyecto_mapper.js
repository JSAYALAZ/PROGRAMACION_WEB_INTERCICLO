"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoMapper = void 0;
class ProyectoMapper {
    static map(data) {
        return {
            description: data.getDescription(),
            id: data.getId(),
            liveDemoUrl: data.getUrldeploy(),
            participation: data.getParticipationType(),
            portafolioId: data.getPortafolioId(),
            repositoryUrl: data.getUrlRepo(),
            section: data.getSeccion(),
            title: data.getTittle(),
        };
    }
}
exports.ProyectoMapper = ProyectoMapper;
//# sourceMappingURL=proyecto_mapper.js.map