import { AppError } from "src/shared/AppError";
import { AsesoriaCreateDTO } from "../api/dto/input";
import { AsesoriaDB } from "../db/AsesoriaDB";
import { Asesoria } from "../domain/models/Asesoria";
import { getUserById } from "src/mod/usuario/applications/getUserById";

export const createAsesory = async (dto: AsesoriaCreateDTO) => {
  try {
    const user = await getUserById(dto.userId)
    const data = new Asesoria({
      comment:dto.commet,
      date:dto.date,
      durationMin:dto.durationMin,
      hour:dto.hour,
      id:null,
      programmerId:dto.programmerId,
      requesterId:user.getId(),
      responseMessage:null,
      status:"PENDIENTE",
    });
    const result = await AsesoriaDB.save(data);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
