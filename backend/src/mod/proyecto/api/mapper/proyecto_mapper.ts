import { Proyecto } from "../../domain/models/Proyecto";
import { ProyectOutputDTO } from "../dto/output";

export class ProyectoMapper {
  static map(data: Proyecto): ProyectOutputDTO {
    return {
      description: data.getDescription(),
      id: data.getId(),
      liveDemoUrl: data.getUrldeploy(),
      participation: data.getParticipationType(),
      portafolioId: data.getPortafolioId(),
      repositoryUrl: data.getUrlRepo(),
      section: data.getSeccion(),
      title: data.getTittle(),
    };
  }
}
