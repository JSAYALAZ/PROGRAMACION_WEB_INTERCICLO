"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ZodValidator_1 = require("src/shared/ZodValidator");
const input_1 = require("./dto/input");
const listDisponibilidad_1 = require("../applications/listDisponibilidad");
const ApiResponse_1 = require("src/shared/ApiResponse");
const getDisponibilidadById_1 = require("../applications/getDisponibilidadById");
const createDisponibilidad_1 = require("../applications/createDisponibilidad");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    try {
        const user = await (0, listDisponibilidad_1.listDisponibilidad)();
        return ApiResponse_1.ApiResponse.success(res, "Correcto", user);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.post("/", async (req, res) => {
    try {
        const { validated } = await (0, ZodValidator_1.zodValidateJson)(req, input_1.AvailibilityCreateDTO);
        const userId = await (0, createDisponibilidad_1.createDisponibilidad)(validated);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", userId);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await (0, getDisponibilidadById_1.getDisponibilidadById)(id);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", user);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
exports.default = router;
//# sourceMappingURL=routes.js.map