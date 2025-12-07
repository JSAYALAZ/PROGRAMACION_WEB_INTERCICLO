import { Asesoria } from "src/mod/asesoria/domain/models/Asesoria";
import { AsesoriaOutputDTO } from "../dto/output";

export class AsesoriaMapper {
  static map(data: Asesoria): AsesoriaOutputDTO {
    return {
      id:data.getId(),
      comment: data.getComment(),
      date:data.getWeekday(),
      durationMin: data.getDurationMin(),
      hour: data.getHour(),
      programmerId: data.getProgrammerId(),
      responseMessage: data.getResponseMessage(),
      status: data.getStatus(),
    };
  }
}
