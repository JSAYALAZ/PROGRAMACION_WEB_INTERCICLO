import { AppError } from "../../../shared/AppError";
import { listAsesorias } from "../../asesoria/applications/listAsesorias";
import { getUserById } from "../../usuario/applications/getUserById";

export const listSendedAsesories = async (userId: string) => {
  try {
    const user = await getUserById(userId);
    const asesories = await listAsesorias({ requesterId: user.getId() });
    return asesories
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
