import { AppError } from "src/shared/AppError";
import { UserCreateDTO } from "../api/dto/input";
import { UserDb } from "../db/UserDb";
import { Usuario } from "../domain/models/Usuario";
import { getUserById } from "./getUserById";

export const createUser = async (dto: UserCreateDTO) => {
  try {
    let exitingUser: Usuario | null = null;
    try {
      exitingUser = await getUserById(dto.firebaseUid);
    } catch (error) {
      console.warn("Nuevo usuario");
    }
    const user = new Usuario({
      email: exitingUser?.getEmail() || dto.email,
      firebaseUid: dto.firebaseUid,
      foto_perfil: exitingUser?.getFotoPerfil() || dto.foto_perfil,
      id: exitingUser?.getId() || null,
      rol: exitingUser?.getRole() || "USER",
      username: exitingUser?.getUsername() || dto.displayName,
    });
    const result = await UserDb.save(user);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
