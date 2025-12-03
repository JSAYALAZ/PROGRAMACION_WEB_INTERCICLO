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
  disponibilidad: [];
};
@Component({
  selector: 'app-perfil-programador-card',
  imports: [CommonModule],
  templateUrl: './perfil-programador-card.html',
  styleUrl: './perfil-programador-card.css',
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
}
