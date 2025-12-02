import { AppError } from "src/shared/AppError";
import { UserDb } from "../db/UserDb";
import { Usuario } from "../domain/models/Usuario";

export const getUserById = async (id:string) => {
  try {
    let resutl : Usuario | null = null
    try {
      resutl = await UserDb.getById(id);
    } catch (error) {
      console.log("No se encontro por id");
      
    }
    try {
      resutl = await UserDb.getByFirebaseId(id);
    } catch (error) {
      
    }
    if(resutl ==null){
      throw AppError.notFound()
    }
    return resutl;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
