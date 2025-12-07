"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectFiltersDTO = exports.ProyectCreateDTO = void 0;
exports.parseCateogyrFilter = parseCateogyrFilter;
const enums_1 = require("src/generated/prisma/enums");
const zod_1 = __importDefault(require("zod"));
exports.ProyectCreateDTO = zod_1.default.object({
    description: zod_1.default.string(),
    liveDemoUrl: zod_1.default.string().nullable(),
    userId: zod_1.default.string(),
    repositoryUrl: zod_1.default.string().nullable(),
    participation: zod_1.default.enum(enums_1.ParticipationType),
    section: zod_1.default.enum(enums_1.ProjectSection),
    title: zod_1.default.string(),
});
exports.ProyectFiltersDTO = zod_1.default.object({
    portfolioId: zod_1.default
        .string()
        .trim()
        .transform((v) => {
        return v == "" ? undefined : v;
    })
        .optional(),
    title: zod_1.default
        .string()
        .trim()
        .transform((v) => {
        return v == "" ? undefined : v;
    })
        .optional(),
    section: zod_1.default
        .string()
        .trim()
        .transform((v) => {
        return v == "" ? undefined : v;
    })
        .optional(),
    participation: zod_1.default
        .string()
        .trim()
        .transform((v) => {
        return v == "" ? undefined : v;
    })
        .optional(),
    ownerId: zod_1.default
        .string()
        .trim()
        .transform((v) => {
        return v == "" ? undefined : v;
    })
        .optional(),
});
function parseCateogyrFilter(sp) {
    return exports.ProyectFiltersDTO.parse(Object.fromEntries(sp));
}
//# sourceMappingURL=input.js.map