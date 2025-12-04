import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../../services/axios.service';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from '../../../app.routes';
import { AsesoriaCard } from '../../asesorias/asesoria-card/asesoria-card';

@Component({
  selector: 'app-citas-main-page',
  standalone: true,
  imports: [CommonModule,AsesoriaCard],
  templateUrl: './citas-main-page.html',
  styleUrl: './citas-main-page.css',
})
export class CitasMainPage implements OnInit {
  get data$() {
    return this.axios.data$;
  }
  get loading$() {
    return this.axios.loading$;
  }
  get error$() {
    return this.axios.error$;
  }

  constructor(private axios: AxiosService<any[]>) {}
  ngOnInit() {
    this.axios.fetch(APP_ROUTES.main.childrens.citas.apiPath, { page: 1 }, []);
  }
  reload() {
    this.axios.fetch(APP_ROUTES.main.childrens.proyectos.apiPath);
  }
}
