import { AppError } from "src/shared/AppError";
import { UserDb } from "../db/UserDb";

export const getUserById = async (id:string) => {
  try {
    const result = await UserDb.getById(id);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
