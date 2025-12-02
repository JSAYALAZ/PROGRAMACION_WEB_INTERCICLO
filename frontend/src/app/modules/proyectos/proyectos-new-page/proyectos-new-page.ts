import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from '../../../app.routes';

@Component({
  selector: 'app-proyectos-new-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './proyectos-new-page.html',
  styleUrl: './proyectos-new-page.css',
})
export class ProyectosNewPage {
  authForm!: FormGroup;
  loadingSubmit: boolean = false;

  constructor(private route: Router, private http: HttpClient) {
    this.initForm();
  }
  initForm() {
    this.authForm = new FormGroup({
      description: new FormControl('', Validators.required),
      liveDemoUrl: new FormControl(''),
      portafolioId: new FormControl('', Validators.required),
      repositoryUrl: new FormControl(''),
      participation: new FormControl('', Validators.required),
      section: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
    });
  }
  async onSubmit() {
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
        portafolioId: this.authForm.value.portafolioId,
        repositoryUrl: this.authForm.value.repositoryUrl,
        participation: this.authForm.value.participation,
        section: this.authForm.value.section,
        title: this.authForm.value.title,
      };

      this.http.post(APP_ROUTES.main.childrens.proyectos.apiPath, object).subscribe((data) => {
        console.log(data);
      });
      this.route.navigate([APP_ROUTES.main.childrens.proyectos.absolutePath]);
    } catch (err: any) {
      if (err instanceof Error) {
      }
    } finally {
      this.loadingSubmit = false;
    }
  }
  ngOnInit() {}
}
