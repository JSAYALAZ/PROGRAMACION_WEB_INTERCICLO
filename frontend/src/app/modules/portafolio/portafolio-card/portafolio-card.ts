import { Component, Input } from '@angular/core';
export type PortafolioOutputDTO = {
  id: string;
  ownerId: string;
  title: string;
  description: string | null;
};
@Component({
  selector: 'app-portafolio-card',
  imports: [],
  templateUrl: './portafolio-card.html',
  styleUrl: './portafolio-card.css',
})
export class PortafolioCard {
 @Input({ required: true }) portfolio!: PortafolioOutputDTO;

  // Color simple para placeholder (puedes mapear ownerId a un color real si lo deseas)
  getInitial() {
    return this.portfolio?.title?.[0]?.toUpperCase() ?? '?';
  }
}
