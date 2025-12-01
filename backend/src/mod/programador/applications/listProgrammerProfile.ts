import { AppError } from "src/shared/AppError";
import { ProgrammerProfileDb } from "../db/ProgrammerProfileDb";

export const listProgrammerProfile = async () => {
  try {
    const result = await ProgrammerProfileDb.list();
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
