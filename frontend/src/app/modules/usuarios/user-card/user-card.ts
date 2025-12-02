import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
export type UserOutputDTO = {
  id: string;
  firebaseUid: string;
  username: string;
  foto_perfil: string | null;
  email: string;
  rol: string; // puede ser 'ADMIN', 'USER', 'SUPER'... ajusta según tu enum
};
@Component({
  selector: 'app-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
 @Input({ required: true }) user!: UserOutputDTO;

  // Colores del badge por rol (ajusta a tus roles reales)
  roleColorMap: Record<string, string> = {
    ADMIN: 'bg-red-600 text-white',
    PROGRAMMER: 'bg-purple-600 text-white',
    USER: 'bg-gray-200 text-gray-800'
  };

  getRoleClasses(role: string) {
    return this.roleColorMap[role] ?? 'bg-gray-200 text-gray-800';
  }

  getInitial() {
    return this.user?.username?.[0]?.toUpperCase() ?? '?';
  }
}
