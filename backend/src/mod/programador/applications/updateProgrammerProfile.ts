
import { ProgrammerProfileUpdateDTO } from "../api/dto/input";
import { getProgrammerProfileById } from "./getProgrammerProfileById";
import { ProgrammerProfileDb } from "../db/ProgrammerProfileDb";
import { AppError } from "@/src/shared/AppError";
import { getUserById } from "../../usuario/applications/getUserById";
import { Disponibilidad } from "../../disponibilidad/domain/models/Disponibilidad";
import { DisponibilidadDb } from "../../disponibilidad/db/DisponibilidadDb";

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
