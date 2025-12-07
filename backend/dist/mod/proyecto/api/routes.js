"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listProyects_1 = require("../applications/listProyects");
const input_1 = require("./dto/input");
const createProyect_1 = require("../applications/createProyect");
const getProyectById_1 = require("../applications/getProyectById");
const proyecto_mapper_1 = require("./mapper/proyecto_mapper");
const ApiResponse_1 = require("../../../shared/ApiResponse");
const ZodValidator_1 = require("../../../shared/ZodValidator");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    try {
        const dates = await (0, listProyects_1.listProyects)();
        const resp = dates.map((user) => {
            return proyecto_mapper_1.ProyectoMapper.map(user);
        });
        return ApiResponse_1.ApiResponse.success(res, "Correcto", resp);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.post("/", async (req, res) => {
    try {
        const { validated } = await (0, ZodValidator_1.zodValidateJson)(req, input_1.ProyectCreateDTO);
        const userId = await (0, createProyect_1.createProyect)(validated);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", userId);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await (0, getProyectById_1.getProyectById)(id);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", proyecto_mapper_1.ProyectoMapper.map(data));
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
exports.default = router;
//# sourceMappingURL=routes.js.map