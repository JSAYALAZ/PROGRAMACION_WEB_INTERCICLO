"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectOutputDTO = void 0;
const enums_1 = require("src/generated/prisma/enums");
const zod_1 = require("zod");
exports.ProyectOutputDTO = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    section: zod_1.z.enum(enums_1.ProjectSection),
    participation: zod_1.z.enum(enums_1.ParticipationType),
    repositoryUrl: zod_1.z.string().nullable(),
    liveDemoUrl: zod_1.z.string().nullable(),
    portafolioId: zod_1.z.string(),
});
//# sourceMappingURL=output.js.map