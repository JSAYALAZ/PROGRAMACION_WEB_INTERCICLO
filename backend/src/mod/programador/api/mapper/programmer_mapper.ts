
import { DisponibilidadMapper } from "../../../../mod/disponibilidad/api/mapper/disponibilidad_mapper";
import { PerfilProgramador } from "../../domain/models/PerfilProgramador";
import { ProgrammerOutputDTO } from "../dto/output";

export class ProgrammerMapper {
  static map(data: PerfilProgramador): ProgrammerOutputDTO {
    return {
      avatarUrl: data.getAvatarUrl(),
      bio: data.getBio(),
      contactLinks: data.getContactLinks(),
      disponibilidad: data
        .getDisponibilidad()
        .map((d) => DisponibilidadMapper.map(d)),
      id: data.getId(),
      name: data.getName(),
      portafolioId: data.getPortafolioId(),
      specialty: data.getSpecialty(),
      userId: data.getUserId(),
    };
  }
}
