import { Asesoria } from "../models/Asesoria";

export function validateNoAsesoriaReply(
  asesoria: Asesoria,
  existing: Asesoria[]
): boolean {
  const newStart = asesoria.getHour();
  const newEnd = newStart + asesoria.getDurationMin();
  for (const a of existing) {
    const start = a.getHour();
    const end = start + a.getDurationMin();
    if (newStart < end && newEnd > start) {
      return false;
    }

  }

  return true;
}
