"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProgrammerProfile = void 0;
const getProgrammerProfileById_1 = require("./getProgrammerProfileById");
const ProgrammerProfileDb_1 = require("../db/ProgrammerProfileDb");
const AppError_1 = require("../../../shared/AppError");
const getUserById_1 = require("../../usuario/applications/getUserById");
const Disponibilidad_1 = require("../../disponibilidad/domain/models/Disponibilidad");
const DisponibilidadDb_1 = require("../../disponibilidad/db/DisponibilidadDb");
const updateProgrammerProfile = async (dto) => {
    try {
        const user = await (0, getUserById_1.getUserById)(dto.userId);
        if (user.getRole() != "PROGRAMMER") {
            throw AppError_1.AppError.dependencyInvalid();
        }
        if (!user.getProgrammerProfile()) {
            throw AppError_1.AppError.notFound();
        }
        const profile = await (0, getProgrammerProfileById_1.getProgrammerProfileById)(user.getProgrammerProfile()?.getId() || "");
        profile.setBio(dto.bio);
        profile.setSpecialty(dto.specialty);
        const result = await ProgrammerProfileDb_1.ProgrammerProfileDb.save(profile);
        const availabilities = [];
        dto.disponibilidad.forEach((d) => {
            availabilities.push(new Disponibilidad_1.Disponibilidad({
                day: d.day,
                endMinutes: Number(d.endMinutes),
                programmerId: profile.getId(),
                startMinutes: Number(d.startMinutes),
            }));
        });
        await DisponibilidadDb_1.DisponibilidadDb.deleteAllFromProgrammer(profile.getId());
        await DisponibilidadDb_1.DisponibilidadDb.createMany(availabilities);
        return result;
    }
    catch (error) {
        if (error instanceof AppError_1.AppError)
            throw error;
        throw AppError_1.AppError.internal();
    }
};
exports.updateProgrammerProfile = updateProgrammerProfile;
//# sourceMappingURL=updateProgrammerProfile.js.map