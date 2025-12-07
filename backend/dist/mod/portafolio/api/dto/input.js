"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortafolioFiltersDTO = exports.PortafolioUpdateDTO = exports.PortafolioCreateDTO = void 0;
exports.parseCateogyrFilter = parseCateogyrFilter;
const zod_1 = __importDefault(require("zod"));
exports.PortafolioCreateDTO = zod_1.default.object({
    programmerProfileId: zod_1.default.string(),
    description: zod_1.default.string(),
    title: zod_1.default.string(),
});
exports.PortafolioUpdateDTO = zod_1.default.object({
    description: zod_1.default.string(),
    title: zod_1.default.string(),
});
exports.PortafolioFiltersDTO = zod_1.default.object({
    ownerId: zod_1.default
        .string()
        .trim()
        .optional()
        .transform((v) => {
        return v == "" ? undefined : v;
    }),
    title: zod_1.default
        .string()
        .trim()
        .optional()
        .transform((v) => {
        return v == "" ? undefined : v;
    }),
});
function parseCateogyrFilter(sp) {
    return exports.PortafolioFiltersDTO.parse(Object.fromEntries(sp));
}
//# sourceMappingURL=input.js.map