"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProgrammerProfileByUserId = void 0;
const AppError_1 = require("../../../shared/AppError");
const ProgrammerProfileDb_1 = require("../db/ProgrammerProfileDb");
const getProgrammerProfileByUserId = async (userId) => {
    try {
        const resp = await ProgrammerProfileDb_1.ProgrammerProfileDb.getByUserId(userId);
        return resp;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.getProgrammerProfileByUserId = getProgrammerProfileByUserId;
//# sourceMappingURL=getProgrammerProfileByUserId.js.map