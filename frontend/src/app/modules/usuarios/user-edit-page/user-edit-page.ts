import { Component } from '@angular/core';
import { AxiosService } from '../../../services/axios.service';
import { APP_ROUTES } from '../../../app.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-edit-page.html',
})
export class UserEditPage {
  authForm!: FormGroup;
  userId: string = '';
  rol = 'USER';
  loadingSubmit: boolean = false;
  private sub?: Subscription;

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
    const stored = localStorage.getItem('rol');
    this.rol = stored ?? 'USER';
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
        .subscribe({
          next: (v: any) => {
            if (v.success) {
              const redirectPath =
                this.rol == 'ADMIN'
                  ? APP_ROUTES.main.childrens.usuarios.absolutePath
                  : APP_ROUTES.main.childrens.main;
              this.route.navigate([redirectPath]);
            }
          },
        });
    } catch (err: any) {
      if (err instanceof Error) {
      }
    } finally {
      this.loadingSubmit = false;
    }
  }
  ngOnInit() {
    const userId = this.activeRoute.snapshot.paramMap.get('id');
    if (userId == null) {
      this.route.navigate([APP_ROUTES.main.childrens.usuarios.path]);
    } else {
      this.userId = userId;
      this.axios.fetch(`${APP_ROUTES.main.childrens.usuarios.apiPath}/${userId}`, { page: 1 }, []);
      this.sub = this.axios.data$.pipe().subscribe((data) => {
        this.authForm.patchValue({
          displayName: data.username ?? '',
          role: data.rol ?? '',
        });
      });
    }
  }
  reload() {
    this.axios.fetch(APP_ROUTES.main.childrens.proyectos.apiPath);
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
