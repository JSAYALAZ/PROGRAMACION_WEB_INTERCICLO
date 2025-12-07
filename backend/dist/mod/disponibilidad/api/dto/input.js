"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailibilityCreateDTO = void 0;
const zod_1 = __importDefault(require("zod"));
exports.AvailibilityCreateDTO = zod_1.default.object({
    date: zod_1.default.string(),
    durationMin: zod_1.default.number(),
    notes: zod_1.default.string(),
    programmerId: zod_1.default.string(),
});
//# sourceMappingURL=input.js.map