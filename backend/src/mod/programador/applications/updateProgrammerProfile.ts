import { getUserById } from "src/mod/usuario/applications/getUserById";
import { ProgrammerProfileUpdateDTO } from "../api/dto/input";
import { AppError } from "src/shared/AppError";
import { getProgrammerProfileById } from "./getProgrammerProfileById";
import { ProgrammerProfileDb } from "../db/ProgrammerProfileDb";
import { Disponibilidad } from "src/mod/disponibilidad/domain/models/Disponibilidad";
import { DisponibilidadDb } from "src/mod/disponibilidad/db/DisponibilidadDb";

export const updateProgrammerProfile = async (
  dto: ProgrammerProfileUpdateDTO
) => {
  try {
    const user = await getUserById(dto.userId);
    if (user.getRole() != "PROGRAMMER") {
      throw AppError.dependencyInvalid();
    }
    if (!user.getProgrammerProfile()) {
      throw AppError.notFound();
    }

    const profile = await getProgrammerProfileById(
      user.getProgrammerProfile()?.getId() || ""
    );
    profile.setBio(dto.bio);
    profile.setSpecialty(dto.specialty);
    const result = await ProgrammerProfileDb.save(profile);

    const availabilities: Disponibilidad[] = [];
    dto.disponibilidad.forEach((d) => {
      availabilities.push(
        new Disponibilidad({
          day: d.day,
          endMinutes: Number(d.endMinutes),
          programmerId: profile.getId(),
          startMinutes: Number(d.startMinutes),
        })
      );
    });
    await DisponibilidadDb.deleteAllFromProgrammer(profile.getId());
    await DisponibilidadDb.createMany(availabilities);

    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
