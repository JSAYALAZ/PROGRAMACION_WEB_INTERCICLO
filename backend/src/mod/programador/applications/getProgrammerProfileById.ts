import { AppError } from "@/src/shared/AppError";
import { ProgrammerProfileDb } from "../db/ProgrammerProfileDb";


export const getProgrammerProfileById = async (id: string) => {
  try {
    const resp = await ProgrammerProfileDb.getById(id);
    return resp;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
