"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOutputDTO = void 0;
const enums_1 = require("src/generated/prisma/enums");
const zod_1 = require("zod");
exports.UserOutputDTO = zod_1.z.object({
    id: zod_1.z.string(),
    firebaseUid: zod_1.z.string(),
    username: zod_1.z.string(),
    foto_perfil: zod_1.z.string().nullable(),
    email: zod_1.z.string(),
    rol: zod_1.z.enum(enums_1.Role),
});
//# sourceMappingURL=output.js.map