"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateDTO = exports.UserCreateDTO = void 0;
const enums_1 = require("src/generated/prisma/enums");
const zod_1 = __importDefault(require("zod"));
exports.UserCreateDTO = zod_1.default.object({
    firebaseUid: zod_1.default.string(),
    email: zod_1.default.string(),
    displayName: zod_1.default.string(),
    foto_perfil: zod_1.default.string(),
});
exports.UserUpdateDTO = zod_1.default.object({
    displayName: zod_1.default.string(),
    role: zod_1.default.enum(enums_1.Role),
});
//# sourceMappingURL=input.js.map