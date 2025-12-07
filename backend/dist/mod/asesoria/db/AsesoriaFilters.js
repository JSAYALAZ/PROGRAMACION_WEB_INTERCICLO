"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAsesoriaFilters = generateAsesoriaFilters;
const utils_1 = require("src/shared/utils");
function generateAsesoriaFilters(q) {
    const filters = [];
    if (q.from || q.to) {
        const { end, start } = (0, utils_1.createDateFitlers)(q.from || null, q.to || null);
        filters.push({
            createdAt: {
                lte: end,
                gte: start,
            },
        });
    }
    if (q.programmerId !== undefined) {
        filters.push({ programmerId: q.programmerId });
    }
    if (q.requesterId !== undefined) {
        filters.push({ requesterId: q.requesterId });
    }
    if (q.status !== undefined) {
        filters.push({ status: q.status });
    }
    const where = {
        AND: filters,
    };
    return { filters: { where } };
}
//# sourceMappingURL=AsesoriaFilters.js.map