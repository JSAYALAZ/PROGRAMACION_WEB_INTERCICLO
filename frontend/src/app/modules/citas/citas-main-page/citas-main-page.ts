import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../../services/axios.service';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from '../../../app.routes';
import { AsesoriaCard, AsesoriaOutputDTO } from '../../asesorias/asesoria-card/asesoria-card';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-citas-main-page',
  standalone: true,
  imports: [CommonModule, AsesoriaCard],
  templateUrl: './citas-main-page.html',
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
    // const prgId = this.route.snapshot.queryParamMap.get('userId');
    // if (prgId) {
      const url = `${APP_ROUTES.main.childrens.citas.apiPath}/6930955fe714bbd38bc31211/received`;
      this.axios.fetch(url, { page: 1 }, []);
    // }
  }
}
