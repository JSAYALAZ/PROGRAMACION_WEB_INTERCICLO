"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesoriaOutputDTO = void 0;
const zod_1 = require("zod");
exports.AsesoriaOutputDTO = zod_1.z.object({
    id: zod_1.z.string(),
    programmerId: zod_1.z.string(),
    date: zod_1.z.string(),
    hour: zod_1.z.number(),
    durationMin: zod_1.z.number(),
    comment: zod_1.z.string().nullable(),
    status: zod_1.z.string(),
    responseMessage: zod_1.z.string().nullable(),
});
//# sourceMappingURL=output.js.map