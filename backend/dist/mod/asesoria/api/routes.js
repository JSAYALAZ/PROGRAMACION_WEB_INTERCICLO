"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ZodValidator_1 = require("src/shared/ZodValidator");
const listAsesorias_1 = require("../applications/listAsesorias");
const ApiResponse_1 = require("src/shared/ApiResponse");
const input_1 = require("./dto/input");
const createAsesory_1 = require("../applications/createAsesory");
const getAsesoriaById_1 = require("../applications/getAsesoriaById");
const updateAsesoria_1 = require("../applications/updateAsesoria");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    try {
        const user = await (0, listAsesorias_1.listAsesorias)();
        return ApiResponse_1.ApiResponse.success(res, "Correcto", user);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.post("/", async (req, res) => {
    try {
        const { validated } = await (0, ZodValidator_1.zodValidateJson)(req, input_1.AsesoriaCreateDTO);
        const userId = await (0, createAsesory_1.createAsesory)(validated);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", userId);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await (0, getAsesoriaById_1.getAsesoriaById)(id);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", user);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { validated } = await (0, ZodValidator_1.zodValidateJson)(req, input_1.AsesoriaUpdateDTO);
        const user = await (0, updateAsesoria_1.updateAsesoria)(id, validated);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", user);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
exports.default = router;
//# sourceMappingURL=routes.js.map