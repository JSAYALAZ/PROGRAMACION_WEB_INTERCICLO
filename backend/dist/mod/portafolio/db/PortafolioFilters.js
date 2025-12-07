"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePortafolioFiltres = generatePortafolioFiltres;
function generatePortafolioFiltres(q) {
    const filters = [];
    if (q.ownerId !== undefined) {
        filters.push({ ownerId: q.ownerId });
    }
    if (q.title !== undefined) {
        filters.push({ title: { contains: q.title } });
    }
    const where = {
        AND: filters,
    };
    return { filters: { where } };
}
//# sourceMappingURL=PortafolioFilters.js.map