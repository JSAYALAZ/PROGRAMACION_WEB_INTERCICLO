"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listSendedAsesories_1 = require("../applications/listSendedAsesories");
const ApiResponse_1 = require("src/shared/ApiResponse");
const listReceivedAsesories_1 = require("../applications/listReceivedAsesories");
const asesoria_mapper_1 = require("./mapper/asesoria_mapper");
const router = (0, express_1.Router)();
router.get("/:userId/received", async (req, res) => {
    try {
        const { userId } = req.params;
        const dates = await (0, listReceivedAsesories_1.listReceivedAsesories)(userId);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", dates.map((d) => asesoria_mapper_1.AsesoriaMapper.map(d)));
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
router.get("/:userId/sended", async (req, res) => {
    try {
        const { userId } = req.params;
        const dates = await (0, listSendedAsesories_1.listSendedAsesories)(userId);
        return ApiResponse_1.ApiResponse.success(res, "Correcto", dates.map((d) => asesoria_mapper_1.AsesoriaMapper.map(d)));
    }
    catch (error) {
        return ApiResponse_1.ApiResponse.error(res, error);
    }
});
exports.default = router;
//# sourceMappingURL=routes.js.map