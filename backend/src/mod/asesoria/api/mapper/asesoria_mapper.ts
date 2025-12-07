import { Asesoria } from "../../domain/models/Asesoria";
import { AsesoriaOutputDTO } from "../dto/output";

export class AsesoriaMapper {
  static map(data: Asesoria): AsesoriaOutputDTO {
    return {
      comment: data.getComment(),
      date: data.getDate().toISOString(),
      durationMin: data.getDurationMin(),
      hour: data.getHour(),
      programmerId: data.getProgrammerId(),
      responseMessage: data.getResponseMessage(),
      status: data.getStatus(),
    };
  }
}
