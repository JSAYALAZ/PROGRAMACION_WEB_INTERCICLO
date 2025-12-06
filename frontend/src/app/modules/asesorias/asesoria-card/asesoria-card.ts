import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
export type AsesoriaOutputDTO = {
  programmerId: string;
  date: string; // ISO date string expected
  hour: number; // interpreted as minutes since midnight OR hour number (0-23)
  durationMin: number;
  comment: string | null;
  status: string;
  responseMessage: string | null;
};
@Component({
  selector: 'app-asesoria-card',
  imports: [CommonModule],
  templateUrl: './asesoria-card.html',
})
export class AsesoriaCard {
@Input() asesoria!: AsesoriaOutputDTO;

  // Formatea hour en "HH:MM" intentando adivinar si hour está en minutos o en horas.
  formatHour(hour: number): string {
    if (hour == null || Number.isNaN(hour)) return "--:--";
    // si parece minutos (> 24) lo tratamos como minutos desde medianoche
    if (hour > 24) {
      const hh = Math.floor((hour % 1440) / 60);
      const mm = Math.floor(hour % 60);
      return `${this.pad(hh)}:${this.pad(mm)}`;
    }
    // si es entero entre 0 y 23 lo tratamos como hora completa
    if (Number.isInteger(hour) && hour >= 0 && hour <= 23) {
      return `${this.pad(hour)}:00`;
    }
    // si es decimal (por ejemplo 13.5) convertimos la parte fraccional a minutos
    const hh = Math.floor(hour);
    const mm = Math.round((hour - hh) * 60);
    return `${this.pad(hh)}:${this.pad(mm)}`;
  }

  formatDate(iso: string): string {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
    } catch {
      return iso;
    }
  }

  pad(n: number) {
    return n.toString().padStart(2, "0");
  }

  statusBadgeClass(status: string) {
    switch ((status || "").toLowerCase()) {
      case "confirmed":
      case "aceptada":
      case "done":
        return "bg-emerald-100 text-emerald-800";
      case "pending":
      case "pendiente":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
      case "cancelada":
      case "rejected":
        return "bg-rose-100 text-rose-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  }
}
