import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../../services/axios.service';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from '../../../app.routes';
import { PortafolioCard } from '../portafolio-card/portafolio-card';

@Component({
  selector: 'app-portafolio-main-page',
  standalone: true,
  imports: [CommonModule,PortafolioCard],
  templateUrl: './portafolio-main-page.html',
  styleUrl: './portafolio-main-page.css',
})
export class PortafolioMainPage implements OnInit {
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
    this.axios.fetch(APP_ROUTES.main.childrens.portafolio.apiPath, { page: 1 }, []);
  }
  reload() {
    this.axios.fetch(APP_ROUTES.main.childrens.portafolio.apiPath);
  }
}
