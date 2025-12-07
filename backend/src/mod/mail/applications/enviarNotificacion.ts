import { Usuario } from "src/mod/usuario/domain/models/Usuario";

export const notificar = async (usuario: Usuario) => {
  console.log("Enviado notificacion a ", usuario.getUsername());
};
