import { AppError } from "../../../shared/AppError";
import { getUserById } from "../../usuario/applications/getUserById";
import { getPortafolioByProgrammerId } from "../../portafolio/applications/getPortafolioByProgrammerId";
import { listAsesorias } from "../../asesoria/applications/listAsesorias";


export const listReceivedAsesories = async (userId: string) => {
  try {
    const user = await getUserById(userId);
    if (user.getRole() != "PROGRAMMER") {
      throw AppError.unauthorized();
    }
    const portafolio = await getPortafolioByProgrammerId(
      user.getProgrammerProfile()?.getId() || ""
    );
    const result = await listAsesorias({
      programmerId: portafolio.getOwnerId(),
    });
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};
