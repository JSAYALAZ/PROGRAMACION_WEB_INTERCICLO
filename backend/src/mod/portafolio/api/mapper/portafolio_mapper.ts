import { Portafolio } from "../../domain/models/Portafolio";
import { PortafolioOutputDTO } from "../dto/output";

export class PortafolioMapper {
  static map(data: Portafolio): PortafolioOutputDTO {
    return {
      description: data.getDescription(),
      id: data.getId(),
      ownerId: data.getOwnerId(),
      title: data.getTitle(),
    };
  }
}
