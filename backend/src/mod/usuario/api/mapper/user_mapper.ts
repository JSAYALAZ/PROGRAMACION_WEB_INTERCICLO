import { Usuario } from "../../domain/models/Usuario";
import { UserOutputDTO } from "../dto/output";

export class UserMapper {
  static map(data: Usuario): UserOutputDTO {
    return {
      id: data.getId(),
      email: data.getEmail(),
      firebaseUid: data.getFirebaseUid(),
      foto_perfil: data.getFotoPerfil(),
      rol: data.getRole(),
      username: data.getUsername(),
    };
  }
}
