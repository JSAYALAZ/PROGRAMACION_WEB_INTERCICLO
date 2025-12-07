
import { AppError } from "../../../shared/AppError";
import { UserDb } from "../db/UserDb";
import { Usuario } from "../domain/models/Usuario";
import { getProgrammerProfileByUserId } from "../../programador/applications/getProgrammerProfileByUserId";

export const getUserById = async (id: string) => {
  try {
    let resutl: Usuario | null = null;
    try {
      resutl = await UserDb.getById(id);
    } catch (error) {}

    try {
      resutl = await UserDb.getByFirebaseId(id);
    } catch (error) {}
    if (resutl == null) {
      throw AppError.notFound();
    }
    try {
      const profileProgrammer = await getProgrammerProfileByUserId(resutl.getId());
      resutl.setProgrammerProfile(profileProgrammer);
    } catch (error) {}
    return resutl;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
