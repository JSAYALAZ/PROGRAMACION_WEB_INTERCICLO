import { AppError } from "src/shared/AppError";
import { getUserById } from "src/mod/usuario/applications/getUserById";
import { getPortafolioByProgrammerId } from "src/mod/portafolio/applications/getPortafolioByProgrammerId";
import { listAsesorias } from "src/mod/asesoria/applications/listAsesorias";

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
