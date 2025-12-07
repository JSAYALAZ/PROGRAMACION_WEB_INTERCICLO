import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../../app.routes';
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
  standalone:true,
  imports: [CommonModule],
  templateUrl: './user-card.html',
})
export class UserCard {
 @Input({ required: true }) user!: UserOutputDTO;

  // Colores del badge por rol (ajusta a tus roles reales)
  roleColorMap: Record<string, string> = {
    ADMIN: 'bg-red-600 text-white',
    PROGRAMMER: 'bg-purple-600 text-white',
    USER: 'bg-gray-200 text-gray-800'
  };
  constructor(private router: Router){

  }

  getRoleClasses(role: string) {
    return this.roleColorMap[role] ?? 'bg-gray-200 text-gray-800';
  }

  getInitial() {
    return this.user?.username?.[0]?.toUpperCase() ?? '?';
  }

  editar(id:string){
    this.router.navigate([APP_ROUTES.main.childrens.usuarios_edit.absolutePath.replace(":id",id)])
  }
}
