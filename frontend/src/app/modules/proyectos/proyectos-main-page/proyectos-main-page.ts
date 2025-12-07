import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../../services/axios.service';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from '../../../app.routes';
import { ProjectCard } from '../proyect-card/proyect-card';
import { LoadingPage } from '../../../pages/loading-page/loading-page';
import { EmptyPage } from '../../../pages/empty-page/empty-page';

@Component({
  selector: 'app-proyectos-main-page',
  standalone:true,
  imports: [CommonModule,ProjectCard,LoadingPage, EmptyPage],
  templateUrl: './proyectos-main-page.html',
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
