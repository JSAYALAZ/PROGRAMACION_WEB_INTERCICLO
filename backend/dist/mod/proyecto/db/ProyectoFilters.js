"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateProyectoFiltres = generateProyectoFiltres;
function generateProyectoFiltres(q) {
    const filters = [];
    if (q.ownerId !== undefined) {
        filters.push({
            portfolio: {
                ownerId: q.ownerId,
            },
        });
    }
    if (q.participation !== undefined) {
        filters.push({ participation: q.participation });
    }
    if (q.portfolioId !== undefined) {
        filters.push({ portfolioId: q.portfolioId });
    }
    if (q.section !== undefined) {
        filters.push({ section: q.section });
    }
    if (q.title !== undefined) {
        filters.push({ title: { contains: q.title } });
    }
    const where = {
        AND: filters,
    };
    return { filters: { where } };
}
//# sourceMappingURL=ProyectoFilters.js.map