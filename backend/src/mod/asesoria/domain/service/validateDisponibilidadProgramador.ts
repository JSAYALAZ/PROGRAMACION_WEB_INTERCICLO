
import { PerfilProgramador } from "../../../../mod/programador/domain/models/PerfilProgramador";
import { Asesoria } from "../models/Asesoria";

export function validateDisponibilidadProgramador(
  asesoria: Asesoria,
  programmer: PerfilProgramador
): boolean {
  const tentativeHour = asesoria.getHour();
  const tentativeDate = asesoria.getWeekday();
  const duration = asesoria.getDurationMin();

  const disponibilitiDate = programmer
    .getDisponibilidad()
    .filter((d) => d.getDay() == tentativeDate);

  if (!disponibilitiDate[0]) return false;

  if (tentativeHour + duration > disponibilitiDate[0].getEndMinutes())
    return false;

  if (tentativeHour < disponibilitiDate[0].getStartMinutes()) return false;

  return true;
}
