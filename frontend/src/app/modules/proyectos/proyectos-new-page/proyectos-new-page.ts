import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from '../../../app.routes';
import { User } from '@angular/fire/auth';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-proyectos-new-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './proyectos-new-page.html',
})
export class ProyectosNewPage {
  private activateRoute = inject(ActivatedRoute);

  user: User = this.activateRoute.parent?.snapshot.data['user'];
  authForm!: FormGroup;
  loadingSubmit: boolean = false;

  constructor(private route: Router, private http: HttpClient, private toast: ToastService) {
    this.initForm();
  }
  initForm() {
    this.authForm = new FormGroup({
      description: new FormControl('', Validators.required),
      liveDemoUrl: new FormControl(''),
      repositoryUrl: new FormControl(''),
      participation: new FormControl('', Validators.required),
      section: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    this.loadingSubmit = true;
    if (!this.authForm.valid) {
      this.loadingSubmit = false;
      return;
    }

    try {
      const object = {
        displayName: this.authForm.value.displayName,
        description: this.authForm.value.description,
        liveDemoUrl: this.authForm.value.liveDemoUrl,
        userId: this.user.uid,
        repositoryUrl: this.authForm.value.repositoryUrl,
        participation: this.authForm.value.participation,
        section: this.authForm.value.section,
        title: this.authForm.value.title,
      };

      this.http.post(APP_ROUTES.main.childrens.proyectos.apiPath, object).subscribe({
        next: (v: any) => {
          if (v.success) {
            this.toast.success('Guardado correctamente', 'Hecho');
            this.route.navigate([APP_ROUTES.main.childrens.proyectos.absolutePath]);
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
  ngOnInit() {}
}
