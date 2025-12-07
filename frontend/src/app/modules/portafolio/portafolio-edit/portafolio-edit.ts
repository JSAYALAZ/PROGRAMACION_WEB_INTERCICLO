import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from '../../../app.routes';
import { AxiosService } from '../../../services/axios.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portafolio-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './portafolio-edit.html',
})
export class PortafolioEdit implements OnInit {
  form!: FormGroup;
  portafolioID = '';
  loadingSubmit = false;
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
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.initForm();
  }
  ngOnInit(): void {
    const portafolioID = this.route.snapshot.paramMap.get('id');
    if (!portafolioID) {
      APP_ROUTES.main.childrens.main.absolutePath;
    } else {
      this.portafolioID = portafolioID;
      this.axios.fetch(
        `${APP_ROUTES.main.childrens.portafolio.apiPath}/${portafolioID}`,
        { page: 1 },
        []
      );

      this.sub = this.axios.data$.pipe().subscribe((data) => {
        this.form.patchValue({
          title: data.title ?? '',
          description: data.description ?? '',
        });
      });
    }
  }

  initForm() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  async onSubmit() {
    if (this.loadingSubmit == true) {
      return;
    }
    this.loadingSubmit = true;
    if (!this.form.valid) {
      this.loadingSubmit = false;
      return;
    }

    try {
      const object = {
        title: this.form.value.title,
        description: this.form.value.description,
      };

      this.http
        .put(`${APP_ROUTES.main.childrens.portafolio.apiPath}/${this.portafolioID}`, object)
        .subscribe({
          next: (v: any) => {
            if (v.success) {
              this.router.navigate([
                APP_ROUTES.main.childrens.portafolio_view.absolutePath.replace(':id', v.data),
              ]);
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
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
