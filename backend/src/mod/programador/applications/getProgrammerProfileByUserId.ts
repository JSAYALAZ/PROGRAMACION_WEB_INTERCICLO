import { ProgrammerProfileDb } from "../db/ProgrammerProfileDb";
import { AppError } from "src/shared/AppError";

export const getProgrammerProfileByUserId = async (userId: string) => {
  try {
    const resp = await ProgrammerProfileDb.getByUserId(userId);
    return resp;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
