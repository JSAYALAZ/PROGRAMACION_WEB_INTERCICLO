import { Component } from '@angular/core';
import { AxiosService } from '../../../services/axios.service';
import { APP_ROUTES } from '../../../app.routes';
import { CommonModule } from '@angular/common';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCard, UserOutputDTO } from '../user-card/user-card';

@Component({
  selector: 'app-users-main-page',
  standalone: true,
  imports: [CommonModule, ɵInternalFormsSharedModule,UserCard],
  templateUrl: './users-main-page.html',
  styleUrl: './users-main-page.css',
})
export class UsersMainPage {
  get data$() {
    return this.axios.data$;
  }
  get loading$() {
    return this.axios.loading$;
  }
  get error$() {
    return this.axios.error$;
  }

  constructor(private axios: AxiosService<UserOutputDTO[]>, private router: Router) {}
  ngOnInit() {
    this.axios.fetch(APP_ROUTES.main.childrens.usuarios.apiPath, { page: 1 }, []);
  }

  editar(id: string) {
    this.router.navigate([APP_ROUTES.main.childrens.usuarios_edit.absolutePath.replace(":id",id)]);
  }
}
