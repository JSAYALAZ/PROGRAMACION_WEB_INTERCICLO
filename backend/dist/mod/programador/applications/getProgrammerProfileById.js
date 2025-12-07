"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProgrammerProfileById = void 0;
const AppError_1 = require("../../../shared/AppError");
const ProgrammerProfileDb_1 = require("../db/ProgrammerProfileDb");
const getProgrammerProfileById = async (id) => {
    try {
        const resp = await ProgrammerProfileDb_1.ProgrammerProfileDb.getById(id);
        return resp;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.getProgrammerProfileById = getProgrammerProfileById;
//# sourceMappingURL=getProgrammerProfileById.js.map