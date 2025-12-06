import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { APP_ROUTES } from '../../../app.routes';
import { Router } from '@angular/router';

export type ProgrammerOutputDTO = {
  id: string;
  userId: string;
  name: string;
  specialty: string;
  bio: string;
  avatarUrl: string;
  contactLinks: string;
  portafolioId: string;
  disponibilidad: {
    day: string;
    startMinuts: number;
    endMinuts: number;
  }[];
};
@Component({
  selector: 'app-perfil-programador-card',
  imports: [CommonModule],
  templateUrl: './perfil-programador-card.html',
})
export class PerfilProgramadorCard {
  @Input() programmer!: ProgrammerOutputDTO;

  constructor(private router: Router) {}
  portafolioView() {
    this.router.navigate([
      APP_ROUTES.main.childrens.portafolio_view.absolutePath.replace(
        ':id',
        this.programmer.portafolioId
      ),
    ]);
  }

  agendarCita() {
    this.router.navigate([APP_ROUTES.main.childrens.asesorias_new.absolutePath], {
      queryParams: {
        programmerId: this.programmer.id,
      },
    });
  }
  formatTime(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}
}
