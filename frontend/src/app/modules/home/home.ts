import { Component, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AxiosService } from '../../services/axios.service';
import { UserOutputDTO } from '../usuarios/user-card/user-card';
import { APP_ROUTES } from '../../app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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

  constructor(private axios: AxiosService<UserOutputDTO>) {}
  ngOnInit() {
    this.axios.fetch(`${APP_ROUTES.main.childrens.usuarios.apiPath}/${this.user.uid}`, { page: 1 });
    this.axios.data$.pipe().subscribe((data: any) => {
      localStorage.setItem('rol', data.rol);
      // si 'rol' pudiera ser objeto: localStorage.setItem('rol', JSON.stringify(data.rol));
    });
  }
}
