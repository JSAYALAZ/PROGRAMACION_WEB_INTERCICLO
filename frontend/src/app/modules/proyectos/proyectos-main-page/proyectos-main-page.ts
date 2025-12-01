import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../../services/axios.service';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from '../../../app.routes';

@Component({
  selector: 'app-proyectos-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos-main-page.html',
  styleUrl: './proyectos-main-page.css',
})
export class ProyectosMainPage implements OnInit {
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
    this.axios.fetch(APP_ROUTES.main.childrens.proyectos.apiPath, { page: 1 }, []);
  }
  reload() {
    this.axios.fetch(APP_ROUTES.main.childrens.proyectos.apiPath);
  }
}
