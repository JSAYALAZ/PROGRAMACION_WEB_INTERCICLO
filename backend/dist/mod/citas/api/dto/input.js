"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesoriaCreateDTO = void 0;
const enums_1 = require("../../../../generated/prisma/enums");
const zod_1 = __importDefault(require("zod"));
exports.AsesoriaCreateDTO = zod_1.default.object({
    date: zod_1.default.enum(enums_1.Weekday),
    hour: zod_1.default.number(),
    durationMin: zod_1.default.number(),
    commet: zod_1.default.string(),
    programmerId: zod_1.default.string(),
    userId: zod_1.default.string(),
});
//# sourceMappingURL=input.js.map