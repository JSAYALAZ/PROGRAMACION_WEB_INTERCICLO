import { AppError } from "src/shared/AppError";
import { UserUpdateDTO } from "../api/dto/input";
import { UserDb } from "../db/UserDb";
import { getUserById } from "./getUserById";

export const updateUser = async (id: string, dto: UserUpdateDTO) => {
  try {
    console.log(dto);
    
    const user = await getUserById(id);
    user.setUsername(dto.displayName);
    user.setRol(dto.role);
    const result = await UserDb.save(user);
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
