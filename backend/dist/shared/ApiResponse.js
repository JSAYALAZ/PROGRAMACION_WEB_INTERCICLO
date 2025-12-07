"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
const AppError_1 = require("./AppError");
class ApiResponse {
    static success(res, message, data = null, status = 200) {
        const payload = {
            success: true,
            message,
            data,
        };
        return res.status(status).json(payload);
    }
    static error(res, error, fallbackMsg) {
        if (error instanceof AppError_1.AppError) {
            return error.toResponse(res);
        }
        return AppError_1.AppError.internal(fallbackMsg ?? "Error interno en el servidor").toResponse(res);
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=ApiResponse.js.map