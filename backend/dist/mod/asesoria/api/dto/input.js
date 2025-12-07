"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesoriaFiltersDTO = exports.AsesoriaUpdateDTO = exports.AsesoriaCreateDTO = void 0;
exports.parseAsesoriaFilters = parseAsesoriaFilters;
const zod_1 = __importDefault(require("zod"));
exports.AsesoriaCreateDTO = zod_1.default.object({
    date: zod_1.default.string(),
    durationMin: zod_1.default.number(),
    commet: zod_1.default.string(),
    programmerId: zod_1.default.string(),
    userId: zod_1.default.string(),
});
exports.AsesoriaUpdateDTO = zod_1.default.object({
    status: zod_1.default.string(),
    responseMessage: zod_1.default.string(),
});
exports.AsesoriaFiltersDTO = zod_1.default.object({
    requesterId: zod_1.default
        .string()
        .trim()
        .transform((v) => {
        return v == "" ? undefined : v;
    })
        .optional(),
    programmerId: zod_1.default
        .string()
        .trim()
        .transform((v) => {
        return v == "" ? undefined : v;
    })
        .optional(),
    status: zod_1.default
        .string()
        .trim()
        .transform((v) => {
        return v == "" ? undefined : v;
    })
        .optional(),
    from: zod_1.default.string().trim().optional(),
    to: zod_1.default.string().trim().optional(),
});
function parseAsesoriaFilters(sp) {
    return exports.AsesoriaFiltersDTO.parse(Object.fromEntries(sp));
}
//# sourceMappingURL=input.js.map