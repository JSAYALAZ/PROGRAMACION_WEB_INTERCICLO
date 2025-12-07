import { Component } from '@angular/core';
import { APP_ROUTES } from '../../../app.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { AxiosService } from '../../../services/axios.service';
import { CommonModule } from '@angular/common';
import { LoadingPage } from '../../../pages/loading-page/loading-page';

@Component({
  selector: 'app-portafolio-view',
  standalone:true,
  imports: [CommonModule,LoadingPage],
  templateUrl: './portafolio-view.html',
})
export class PortafolioView {
  portafolioId: string = '';
  get data$() {
    return this.axios.data$;
  }
  get loading$() {
    return this.axios.loading$;
  }
  get error$() {
    return this.axios.error$;
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private axios: AxiosService<any>
  ) {}
  ngOnInit() {
    const portafolioId = this.activeRoute.snapshot.paramMap.get('id');
    if (portafolioId == null) {
      this.route.navigate([APP_ROUTES.main.childrens.portafolio.path]);
    } else {
      this.portafolioId = portafolioId;
      this.axios.fetch(
        `${APP_ROUTES.main.childrens.portafolio.apiPath}/${portafolioId}`,
        { page: 1 },
        []
      );
    }
  }
}
