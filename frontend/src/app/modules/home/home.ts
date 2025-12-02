import { Component, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AxiosService } from '../../services/axios.service';
import { UserOutputDTO } from '../usuarios/user-card/user-card';
import { APP_ROUTES } from '../../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private activateRoute = inject(ActivatedRoute);

  user: User = this.activateRoute.snapshot.data['user'];
  get data$() {
    return this.axios.data$;
  }
  get loading$() {
    return this.axios.loading$;
  }
  get error$() {
    return this.axios.error$;
  }

  constructor(private axios: AxiosService<UserOutputDTO>, private router: Router) {}
  ngOnInit() {
    this.axios.fetch(`${APP_ROUTES.main.childrens.usuarios.apiPath}/${this.user.uid}`, { page: 1 });
  }
  getInitial() {
    "J"
    // return this.data$.pipe().subscribe.username?.[0]?.toUpperCase() ?? '?';
  }
}
