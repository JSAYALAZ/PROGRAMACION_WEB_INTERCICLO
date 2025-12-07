"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const input_1 = require("./dto/input");
const listUsers_1 = require("../applications/listUsers");
const ApiResponse_1 = require("../../../shared/ApiResponse");
const createUser_1 = require("../applications/createUser");
const getUserById_1 = require("../applications/getUserById");
const updateUser_1 = require("../applications/updateUser");
const user_mapper_1 = require("./mapper/user_mapper");
const getProgrammerProfileByUserId_1 = require("src/mod/programador/applications/getProgrammerProfileByUserId");
const ZodValidator_1 = require("@/src/shared/ZodValidator");
const programmer_mapper_1 = require("../../programador/api/mapper/programmer_mapper");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    try {
        const dates = await (0, listUsers_1.listUsers)();
        const resp = dates.map((user) => {
            return user_mapper_1.UserMapper.map(user);
        });
        return ApiResponse_1.ApiResponse.success(res, "Correcto", resp);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.post("/", async (req, res) => {
    try {
        const { validated } = await (0, ZodValidator_1.zodValidateJson)(req, input_1.UserCreateDTO);
        const user = await (0, createUser_1.createUser)(validated);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", user_mapper_1.UserMapper.map(user));
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await (0, getUserById_1.getUserById)(id);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", user_mapper_1.UserMapper.map(data));
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.get("/:id/programmerProfile", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await (0, getUserById_1.getUserById)(id);
        const profile = await (0, getProgrammerProfileByUserId_1.getProgrammerProfileByUserId)(user.getId());
        return ApiResponse_1.ApiResponse.success(res, "Correcto", programmer_mapper_1.ProgrammerMapper.map(profile));
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { validated } = await (0, ZodValidator_1.zodValidateJson)(req, input_1.UserUpdateDTO);
        const user = await (0, updateUser_1.updateUser)(id, validated);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", user);
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
exports.default = router;
//# sourceMappingURL=routes.js.map