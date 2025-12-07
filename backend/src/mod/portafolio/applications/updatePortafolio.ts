
import { AppError } from "@/src/shared/AppError";
import { PortafolioUpdateDTO } from "../api/dto/input";
import { PortafolioDb } from "../db/PortafolioDb";
import { getPortafolioById } from "./getPortafolioById";

export const updatePortafolio = async (id: string, dto: PortafolioUpdateDTO) => {
  try {
    const port = await getPortafolioById(id);
    port.setDescription(dto.description);
    port.setTitle(dto.title);
    const result = await PortafolioDb.save(port);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
