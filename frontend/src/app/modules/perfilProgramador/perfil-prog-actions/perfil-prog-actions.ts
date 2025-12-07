import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from '../../../app.routes';
import { User } from '@angular/fire/auth';
import { AxiosService } from '../../../services/axios.service';
import { ProgrammerOutputDTO } from '../perfil-programador-card/perfil-programador-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-prog-actions',
  imports: [CommonModule],
  templateUrl: './perfil-prog-actions.html',
})
export class PerfilProgActions implements OnInit {
  private activateRoute = inject(ActivatedRoute);

  user: User = this.activateRoute.parent?.snapshot.data['user'];
  get data$() {
    return this.axios.data$;
  }
  get loading$() {
    return this.axios.loading$;
  }
  get error$() {
    return this.axios.error$;
  }

  constructor(private axios: AxiosService<ProgrammerOutputDTO>, private router: Router) {}
  ngOnInit() {
    this.axios.fetch(
      `${APP_ROUTES.main.childrens.usuarios.apiPath}/${this.user.uid}/programmerProfile`,
      { page: 1 }
    );
  }

  crearProyecto() {
    this.router.navigate([APP_ROUTES.main.childrens.proyectos_new.absolutePath]);
  }
  actualizarPerfil() {
    this.router.navigate([APP_ROUTES.main.childrens.perfilProgramador_edit.absolutePath]);
  }
  actualizarPortafolio(id: string) {
    this.router.navigate([
      APP_ROUTES.main.childrens.portafolio_edit.absolutePath.replace(':id', id),
    ]);
  }
}
