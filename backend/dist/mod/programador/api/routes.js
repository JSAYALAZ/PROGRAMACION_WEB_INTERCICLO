"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const input_1 = require("./dto/input");
const createProgrammerProfile_1 = require("../applications/createProgrammerProfile");
const listProgrammerProfile_1 = require("../applications/listProgrammerProfile");
const getProgrammerProfileById_1 = require("../applications/getProgrammerProfileById");
const programmer_mapper_1 = require("./mapper/programmer_mapper");
const updateProgrammerProfile_1 = require("../applications/updateProgrammerProfile");
const ApiResponse_1 = require("../../../shared/ApiResponse");
const ZodValidator_1 = require("../../../shared/ZodValidator");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    try {
        const profiles = await (0, listProgrammerProfile_1.listProgrammerProfile)();
        const resp = profiles.map((user) => {
            return programmer_mapper_1.ProgrammerMapper.map(user);
        });
        return ApiResponse_1.ApiResponse.success(res, "Correcto", resp);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.post("/", async (req, res) => {
    try {
        const { validated } = await (0, ZodValidator_1.zodValidateJson)(req, input_1.ProgrammerProfileCreateDTO);
        const userId = await (0, createProgrammerProfile_1.createProgrammerProfile)(validated);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", userId);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.put("/", async (req, res) => {
    try {
        const { validated } = await (0, ZodValidator_1.zodValidateJson)(req, input_1.ProgrammerProfileUpdateDTO);
        const userId = await (0, updateProgrammerProfile_1.updateProgrammerProfile)(validated);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", userId);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await (0, getProgrammerProfileById_1.getProgrammerProfileById)(id);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", programmer_mapper_1.ProgrammerMapper.map(user));
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
exports.default = router;
//# sourceMappingURL=routes.js.map