
import { AppError } from "@/src/shared/AppError";
import { PortafolioDb } from "../db/PortafolioDb";

export const listPortafolios = async () => {
  try {
    const result = await PortafolioDb.list();
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
