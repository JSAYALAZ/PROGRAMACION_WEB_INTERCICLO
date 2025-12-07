"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodValidateJson = zodValidateJson;
const AppError_1 = require("./AppError");
async function zodValidateJson(req, schema) {
    const data = await req.body;
    const clean = Object.fromEntries(Object.entries(data).map(([k, v]) => [k, v == "" ? null : v]));
    const result = schema.safeParse(clean);
    if (!result.success || !result.data) {
        throw AppError_1.AppError.validation("Datos no validos", result.error?.issues.map((i) => ({
            mensage: i.message
        })));
    }
    return { validated: result.data, json: data };
}
//# sourceMappingURL=ZodValidator.js.map