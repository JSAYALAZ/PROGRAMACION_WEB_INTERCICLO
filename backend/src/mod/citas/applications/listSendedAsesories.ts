import { AppError } from "src/shared/AppError";
import { getUserById } from "src/mod/usuario/applications/getUserById";
import { listAsesorias } from "src/mod/asesoria/applications/listAsesorias";

export const listSendedAsesories = async (userId: string) => {
  try {
    const user = await getUserById(userId);
    const asesories = await listAsesorias({ requesterId: userId });
    return asesories
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
