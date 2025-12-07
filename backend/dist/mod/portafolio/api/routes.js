"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listPortafolios_1 = require("../applications/listPortafolios");
const input_1 = require("./dto/input");
const createPortafolio_1 = require("../applications/createPortafolio");
const getPortafolioById_1 = require("../applications/getPortafolioById");
const portafolio_mapper_1 = require("./mapper/portafolio_mapper");
const updatePortafolio_1 = require("../applications/updatePortafolio");
const ApiResponse_1 = require("../../../shared/ApiResponse");
const ZodValidator_1 = require("../../../shared/ZodValidator");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    try {
        const dates = await (0, listPortafolios_1.listPortafolios)();
        const resp = dates.map((user) => {
            return portafolio_mapper_1.PortafolioMapper.map(user);
        });
        return ApiResponse_1.ApiResponse.success(res, "Correcto", resp);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.post("/", async (req, res) => {
    try {
        const { validated } = await (0, ZodValidator_1.zodValidateJson)(req, input_1.PortafolioCreateDTO);
        const userId = await (0, createPortafolio_1.createPortafolio)(validated);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", userId);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await (0, getPortafolioById_1.getPortafolioById)(id);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", portafolio_mapper_1.PortafolioMapper.map(data));
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { validated } = await (0, ZodValidator_1.zodValidateJson)(req, input_1.PortafolioUpdateDTO);
        const dataId = await (0, updatePortafolio_1.updatePortafolio)(id, validated);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", dataId);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
exports.default = router;
//# sourceMappingURL=routes.js.map