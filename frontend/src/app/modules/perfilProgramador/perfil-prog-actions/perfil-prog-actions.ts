import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../../app.routes';

@Component({
  selector: 'app-perfil-prog-actions',
  imports: [],
  templateUrl: './perfil-prog-actions.html',
  styleUrl: './perfil-prog-actions.css',
})
export class PerfilProgActions {
  constructor(private router: Router) {}
  crearProyecto() {
    this.router.navigate([APP_ROUTES.main.childrens.proyectos_new.absolutePath]);
  }
  actualizarPerfil() {
    this.router.navigate([APP_ROUTES.main.childrens.perfilProgramador_edit.absolutePath]);
  }
}
