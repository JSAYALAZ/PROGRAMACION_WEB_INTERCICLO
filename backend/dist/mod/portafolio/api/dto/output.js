"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortafolioOutputDTO = void 0;
const output_1 = require("src/mod/proyecto/api/dto/output");
const zod_1 = require("zod");
exports.PortafolioOutputDTO = zod_1.z.object({
    id: zod_1.z.string(),
    ownerId: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string().nullable(),
    project: zod_1.z.array(output_1.ProyectOutputDTO)
});
//# sourceMappingURL=output.js.map