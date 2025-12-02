import { AppError } from "src/shared/AppError";
import { UserCreateDTO } from "../api/dto/input";
import { UserDb } from "../db/UserDb";
import { Usuario } from "../domain/models/Usuario";

export const createUser = async (dto: UserCreateDTO) => {
  try {
    const user = new Usuario({
      email: dto.email,
      firebaseUid: dto.firebaseUid,
      foto_perfil: null,
      id: null,
      rol: "USER",
      username: dto.displayName,
    });
    const result = await UserDb.save(user);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
