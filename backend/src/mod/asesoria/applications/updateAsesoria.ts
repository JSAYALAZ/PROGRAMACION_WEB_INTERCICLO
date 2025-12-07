
import { AsesoriaUpdateDTO } from "../api/dto/input";
import { getAsesoriaById } from "./getAsesoriaById";
import { AsesoriaDB } from "../db/AsesoriaDB";
import { AppError } from "../../../shared/AppError";

export const updateAsesoria = async (id: string, dto: AsesoriaUpdateDTO) => {
  try {
    const profile = await getAsesoriaById(id);
    profile.setResponseMessage(dto.responseMessage);
    profile.setStatus(dto.status);
    const resultId = await AsesoriaDB.save(profile);

    return resultId;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
