"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisponibilidadOutputDTO = void 0;
const zod_1 = require("zod");
exports.DisponibilidadOutputDTO = zod_1.z.object({
    day: zod_1.z.string(),
    startMinuts: zod_1.z.number(),
    endMinuts: zod_1.z.number(),
});
//# sourceMappingURL=output.js.map