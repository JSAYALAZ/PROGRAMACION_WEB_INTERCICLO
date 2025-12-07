"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgrammerOutputDTO = void 0;
const output_1 = require("src/mod/disponibilidad/api/dto/output");
const zod_1 = require("zod");
exports.ProgrammerOutputDTO = zod_1.z.object({
    id: zod_1.z.string(),
    userId: zod_1.z.string(),
    name: zod_1.z.string(),
    specialty: zod_1.z.string().nullable(),
    bio: zod_1.z.string().nullable(),
    avatarUrl: zod_1.z.string().nullable(),
    contactLinks: zod_1.z.string().nullable(),
    portafolioId: zod_1.z.string(),
    disponibilidad: zod_1.z.array(output_1.DisponibilidadOutputDTO),
});
//# sourceMappingURL=output.js.map