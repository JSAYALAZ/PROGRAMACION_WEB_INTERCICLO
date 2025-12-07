import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../../app.routes';
export type AsesoriaOutputDTO = {
  id: string;
  comment: string | null;
  date: string; // ISO date string expected
  durationMin: number;
  hour: number; // interpreted as minutes since midnight OR hour number (0-23)
  programmerId: string;
  responseMessage: string | null;
  status: string;
};
@Component({
  selector: 'app-asesoria-card',
  imports: [CommonModule],
  templateUrl: './asesoria-card.html',
})
export class AsesoriaCard {
  @Input({ required: true }) asesoria!: AsesoriaOutputDTO;
  @Input() canEdit!: boolean;

  constructor(private router: Router) {}
  // Formatea hour en "HH:MM" intentando adivinar si hour está en minutos o en horas.
  formatHour(hour: number): string {
    if (hour == null || Number.isNaN(hour)) return '--:--';
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
      return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    } catch {
      return iso;
    }
  }

  pad(n: number) {
    return n.toString().padStart(2, '0');
  }

  statusBadgeClass(status: string) {
    switch ((status || '').toLowerCase()) {
      case 'ACCEPTED':
        return 'bg-emerald-100 text-emerald-800';
      case 'PENDIENTE':
        return 'bg-yellow-100 text-yellow-800';
      case 'REJECTED':
        return 'bg-rose-100 text-rose-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  }

  editarCita() {
    this.router.navigate([
      APP_ROUTES.main.childrens.asesorias_edit.absolutePath.replace(':id', this.asesoria.id),
    ]);
  }
}
