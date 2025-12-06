import { Component, inject, OnInit } from '@angular/core';
import { AxiosService } from '../../../services/axios.service';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from '../../../app.routes';
import { AsesoriaCard } from '../../asesorias/asesoria-card/asesoria-card';
import { ActivatedRoute } from '@angular/router';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-citas-main-page',
  standalone: true,
  imports: [CommonModule,AsesoriaCard],
  templateUrl: './citas-main-page.html',
  styleUrl: './citas-main-page.css',
})
export class CitasMainPage implements OnInit {
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

  constructor(private axios: AxiosService<any[]>) {}
  ngOnInit() {
    const url = `${APP_ROUTES.main.childrens.citas.apiPath}/${this.user.uid}/received`
    this.axios.fetch(url, { page: 1 }, []);
  }

}
