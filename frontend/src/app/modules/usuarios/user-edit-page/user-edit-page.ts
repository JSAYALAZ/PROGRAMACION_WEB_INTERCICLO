import { Component } from '@angular/core';
import { AxiosService } from '../../../services/axios.service';
import { APP_ROUTES } from '../../../app.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-edit-page',
  standalone: true,
  imports: [],
  templateUrl: './user-edit-page.html',
  styleUrl: './user-edit-page.css',
})
export class UserEditPage {
  authForm!: FormGroup;
  userId: string = '';
  loadingSubmit: boolean = false;
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
    private axios: AxiosService<any>,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.initForm();
  }
  initForm() {
    this.authForm = new FormGroup({
      displayName: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
  }
  async onSubmit() {
    this.loadingSubmit = true;
    // this.toast.error('Completa la informacion');
    if (!this.authForm.valid) {
      this.loadingSubmit = false;
      return;
    }

    try {
      const object = {
        displayName: this.authForm.value.displayName,
        role: this.authForm.value.role,
      };

      this.http
        .put(`${APP_ROUTES.main.childrens.usuarios.apiPath}/${this.userId}`, object)
        .subscribe((data) => {
          console.log(data);
        });
      this.route.navigate([APP_ROUTES.main.childrens.usuarios.absolutePath]);
    } catch (err: any) {
      console.log(err);

      if (err instanceof Error) {
        // this.toast.warn('Datos de inicio de session incorrectos');
        // if (err.message == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        // }
      }
    } finally {
      this.loadingSubmit = false;
    }
  }
  ngOnInit() {
    if (this.activeRoute.snapshot.paramMap.get('id') == null) {
      this.route.navigate([APP_ROUTES.main.childrens.usuarios.path]);
    } else {
      this.userId = this.activeRoute.snapshot.paramMap.get('id')!;
      this.axios.fetch(
        `${APP_ROUTES.main.childrens.usuarios.apiPath}/${this.userId}`,
        { page: 1 },
        []
      );
    }
    
  }
  reload() {
    this.axios.fetch(APP_ROUTES.main.childrens.proyectos.apiPath);
  }
}
