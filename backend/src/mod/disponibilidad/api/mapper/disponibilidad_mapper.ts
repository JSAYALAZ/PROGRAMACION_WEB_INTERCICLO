import { Disponibilidad } from "../../domain/models/Disponibilidad";
import { DisponibilidadOutputDTO } from "../dto/output";

export class DisponibilidadMapper {
  static map(data: Disponibilidad): DisponibilidadOutputDTO {
    return {
      day: data.getDay(),
      endMinuts: data.getEndMinutes(),
      startMinuts: data.getStartMinutes(),
    };
  }
}
