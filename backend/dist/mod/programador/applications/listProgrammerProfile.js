"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProgrammerProfile = void 0;
const AppError_1 = require("../../../shared/AppError");
const ProgrammerProfileDb_1 = require("../db/ProgrammerProfileDb");
const listProgrammerProfile = async () => {
    try {
        const result = await ProgrammerProfileDb_1.ProgrammerProfileDb.list();
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.listProgrammerProfile = listProgrammerProfile;
//# sourceMappingURL=listProgrammerProfile.js.map