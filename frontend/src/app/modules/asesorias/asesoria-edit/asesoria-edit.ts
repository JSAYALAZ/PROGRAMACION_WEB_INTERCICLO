import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AxiosService } from '../../../services/axios.service';
import { AsesoriaOutputDTO } from '../asesoria-card/asesoria-card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { APP_ROUTES } from '../../../app.routes';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../services/toast.service';
import { LoadingPage } from '../../../pages/loading-page/loading-page';

@Component({
  selector: 'app-asesoria-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoadingPage],
  templateUrl: './asesoria-edit.html',
})
export class AsesoriaEdit implements OnInit {
  form!: FormGroup;
  asesoriaId: string = '';
  private sub?: Subscription;
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
    private activeRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private axios: AxiosService<AsesoriaOutputDTO>,
    private toast: ToastService
  ) {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      status: new FormControl('', Validators.required),
      responseMessage: new FormControl('', Validators.required),
    });
  }

  async onSubmit() {
    if (this.loadingSubmit) {
      return;
    }
    this.loadingSubmit = true;
    // this.toast.error('Completa la informacion');
    if (!this.form.valid) {
      return;
    }

    try {
      const object = {
        status: this.form.value.status,
        responseMessage: this.form.value.responseMessage,
      };

      this.http
        .put(`${APP_ROUTES.main.childrens.asesorias.apiPath}/${this.asesoriaId}`, object)
        .subscribe({
          next: (v: any) => {
            if (v.success) {
              this.toast.success('Guardado correctamente', 'Hecho');
              setTimeout(() => {
                this.router.navigate([APP_ROUTES.main.childrens.citas.absolutePath]);
              }, 5000);
            }
          },
          error: (err) => {
          if (err.error.message) {
            this.toast.error(err.error.message, 'Control');
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
    const asesoriaId = this.activeRoute.snapshot.paramMap.get('id');
    if (asesoriaId == null) {
      this.router.navigate([APP_ROUTES.main.childrens.usuarios.path]);
    } else {
      this.asesoriaId = asesoriaId;
      this.axios.fetch(`${APP_ROUTES.main.childrens.asesorias.apiPath}/${asesoriaId}`, { page: 1 });
      this.sub = this.axios.data$.pipe().subscribe((data) => {
        this.form.patchValue({
          status: "ACCEPTED",
          responseMessage: data?.responseMessage ?? '',
        });
      });
    }
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
