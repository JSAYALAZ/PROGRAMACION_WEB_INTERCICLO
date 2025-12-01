import { AppError } from "src/shared/AppError";
import { UserDb } from "../db/UserDb";

export const listUsers = async () => {
  try {
    const result = await UserDb.list();
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
