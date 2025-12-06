import { Component } from '@angular/core';
import { AxiosService } from '../../../services/axios.service';
import { APP_ROUTES } from '../../../app.routes';
import { CommonModule } from '@angular/common';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilProgramadorCard, ProgrammerOutputDTO } from '../perfil-programador-card/perfil-programador-card';

@Component({
  selector: 'app-perfilProgramador-main-page',
  standalone: true,
  imports: [CommonModule, ɵInternalFormsSharedModule,PerfilProgramadorCard],
  templateUrl: './perfilProgramador-main-page.html',
})
export class PerfilProgramadorMainPage {
  get data$() {
    return this.axios.data$;
  }
  get loading$() {
    return this.axios.loading$;
  }
  get error$() {
    return this.axios.error$;
  }

  constructor(private axios: AxiosService<ProgrammerOutputDTO[]>, private router: Router) {}
  ngOnInit() {
    this.axios.fetch(APP_ROUTES.main.childrens.perfilProgramador.apiPath, { page: 1 }, []);
  }

  editar(id: string) {
    this.router.navigate([APP_ROUTES.main.childrens.usuarios_edit.absolutePath.replace(":id",id)]);
  }
}
