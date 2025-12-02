import { Component } from '@angular/core';
import { AxiosService } from '../../../services/axios.service';
import { APP_ROUTES } from '../../../app.routes';
import { CommonModule } from '@angular/common';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asesorias-main-page',
  standalone: true,
  imports: [CommonModule, ɵInternalFormsSharedModule],
  templateUrl: './asesorias-main-page.html',
  styleUrl: './asesorias-main-page.css',
})
export class AsesoriasMainPage {
  get data$() {
    return this.axios.data$;
  }
  get loading$() {
    return this.axios.loading$;
  }
  get error$() {
    return this.axios.error$;
  }

  constructor(private axios: AxiosService<any[]>, private router: Router) {}
  ngOnInit() {
    this.axios.fetch(APP_ROUTES.main.childrens.usuarios.apiPath, { page: 1 }, []);
  }

  editar(id: string) {
    this.router.navigate([APP_ROUTES.main.childrens.usuarios_edit.absolutePath.replace(":id",id)]);
  }
}
