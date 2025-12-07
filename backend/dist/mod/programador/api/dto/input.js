"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgrammerProfileUpdateDTO = exports.ProgrammerProfileCreateDTO = void 0;
const enums_1 = require("src/generated/prisma/enums");
const zod_1 = __importDefault(require("zod"));
exports.ProgrammerProfileCreateDTO = zod_1.default.object({
    userId: zod_1.default.string(),
    bio: zod_1.default.string(),
    specialty: zod_1.default.string(),
    disponibilidad: zod_1.default.array(zod_1.default.object({
        day: zod_1.default.enum(enums_1.Weekday),
        startMinutes: zod_1.default.string(),
        endMinutes: zod_1.default.string(),
    })),
});
exports.ProgrammerProfileUpdateDTO = zod_1.default.object({
    userId: zod_1.default.string(),
    bio: zod_1.default.string(),
    specialty: zod_1.default.string(),
    disponibilidad: zod_1.default.array(zod_1.default.object({
        day: zod_1.default.enum(enums_1.Weekday),
        startMinutes: zod_1.default.string(),
        endMinutes: zod_1.default.string(),
    })),
});
//# sourceMappingURL=input.js.map