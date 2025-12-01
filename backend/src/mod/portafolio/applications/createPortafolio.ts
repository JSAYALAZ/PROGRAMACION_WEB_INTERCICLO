import { AppError } from "src/shared/AppError";
import { PortafolioCreateDTO } from "../api/dto/input";
import { PortafolioDb } from "../db/PortafolioDb";
import { Portafolio } from "../domain/models/Portafolio";
import { getProgrammerProfileById } from "src/mod/programador/applications/getProgrammerProfileById";

export const createPortafolio = async (dto: PortafolioCreateDTO) => {
  try {
    await getProgrammerProfileById(
      dto.programmerProfileId
    );
    const user = new Portafolio({
      description: dto.description,
      id: null,
      ownerId: dto.programmerProfileId,
      title: dto.title,
    });
    const result = await PortafolioDb.save(user);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
