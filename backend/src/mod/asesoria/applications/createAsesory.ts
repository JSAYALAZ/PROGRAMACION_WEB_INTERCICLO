
import { AsesoriaCreateDTO } from "../api/dto/input";
import { AsesoriaDB } from "../db/AsesoriaDB";
import { Asesoria } from "../domain/models/Asesoria";
import { validateDisponibilidadProgramador } from "../domain/service/validateDisponibilidadProgramador";
import { generateAsesoriaFilters } from "../db/AsesoriaFilters";
import { validateNoAsesoriaReply } from "../domain/service/validateNoAsesoriaReply";
import { getUserById } from "../../usuario/applications/getUserById";
import { getProgrammerProfileById } from "../../programador/applications/getProgrammerProfileById";
import { AppError } from "@/src/shared/AppError";

export const createAsesory = async (dto: AsesoriaCreateDTO) => {
  try {
    //Creacion de modelos
    const user = await getUserById(dto.userId);
    const asesoria = new Asesoria({
      comment: dto.commet,
      durationMin: dto.durationMin,
      id: null,
      date: dto.date,
      programmerId: dto.programmerId,
      requesterId: user.getId(),
      responseMessage: null,
      status: "PENDIENTE",
    });
    const programmer = await getProgrammerProfileById(dto.programmerId);
    const { filters } = generateAsesoriaFilters({ from: dto.date, programmerId:dto.programmerId })
    const citas = await AsesoriaDB.list(filters);
    
    //Validacion
    if (!validateDisponibilidadProgramador(asesoria, programmer)) {
      throw AppError.dependencyInvalid(
        "El programador no esta disponible este dia"
      );
    }
    if (!validateNoAsesoriaReply(asesoria, citas)) {
      throw AppError.dependencyInvalid(
        "El programador ya tiene una cita registrada"
      );
    }

    const result = await AsesoriaDB.save(asesoria);
    return result;

  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
