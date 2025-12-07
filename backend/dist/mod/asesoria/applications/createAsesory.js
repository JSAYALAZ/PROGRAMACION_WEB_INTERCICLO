"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAsesory = void 0;
const AsesoriaDB_1 = require("../db/AsesoriaDB");
const Asesoria_1 = require("../domain/models/Asesoria");
const validateDisponibilidadProgramador_1 = require("../domain/service/validateDisponibilidadProgramador");
const AsesoriaFilters_1 = require("../db/AsesoriaFilters");
const validateNoAsesoriaReply_1 = require("../domain/service/validateNoAsesoriaReply");
const getUserById_1 = require("../../usuario/applications/getUserById");
const getProgrammerProfileById_1 = require("../../programador/applications/getProgrammerProfileById");
const AppError_1 = require("../../../shared/AppError");
const createAsesory = async (dto) => {
    try {
        //Creacion de modelos
        const user = await (0, getUserById_1.getUserById)(dto.userId);
        const asesoria = new Asesoria_1.Asesoria({
            comment: dto.commet,
            durationMin: dto.durationMin,
            id: null,
            date: dto.date,
            programmerId: dto.programmerId,
            requesterId: user.getId(),
            responseMessage: null,
            status: "PENDIENTE",
        });
        const programmer = await (0, getProgrammerProfileById_1.getProgrammerProfileById)(dto.programmerId);
        const { filters } = (0, AsesoriaFilters_1.generateAsesoriaFilters)({ from: dto.date, programmerId: dto.programmerId });
        const citas = await AsesoriaDB_1.AsesoriaDB.list(filters);
        //Validacion
        if (!(0, validateDisponibilidadProgramador_1.validateDisponibilidadProgramador)(asesoria, programmer)) {
            throw AppError_1.AppError.dependencyInvalid("El programador no esta disponible este dia");
        }
        if (!(0, validateNoAsesoriaReply_1.validateNoAsesoriaReply)(asesoria, citas)) {
            throw AppError_1.AppError.dependencyInvalid("El programador ya tiene una cita registrada");
        }
        const result = await AsesoriaDB_1.AsesoriaDB.save(asesoria);
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.createAsesory = createAsesory;
//# sourceMappingURL=createAsesory.js.map