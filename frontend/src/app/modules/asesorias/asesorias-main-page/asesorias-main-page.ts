import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../../services/axios.service';
import { APP_ROUTES } from '../../../app.routes';
import { CommonModule } from '@angular/common';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AsesoriaCard } from '../asesoria-card/asesoria-card';

@Component({
  selector: 'app-asesorias-main-page',
  standalone: true,
  imports: [CommonModule, ɵInternalFormsSharedModule, AsesoriaCard],
  templateUrl: './asesorias-main-page.html',
})
export class AsesoriasMainPage implements OnInit {
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
    this.axios.fetch(APP_ROUTES.main.childrens.asesorias.apiPath, { page: 1 }, []);
  }

  editar(id: string) {
    this.router.navigate([APP_ROUTES.main.childrens.asesorias.absolutePath.replace(':id', id)]);
  }
}
