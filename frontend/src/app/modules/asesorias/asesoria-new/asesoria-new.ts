import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from '../../../app.routes';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-asesoria-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './asesoria-new.html',
})
export class AsesoriaNew implements OnInit {
  programmerId = '';
  form!: FormGroup;
  private activateRoute = inject(ActivatedRoute);
  user: User = this.activateRoute.parent?.snapshot.data['user'];
  today!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    const prgId = this.route.snapshot.queryParamMap.get('programmerId');
    if (!prgId) {
      APP_ROUTES.main.childrens.main.absolutePath;
    } else {
      this.programmerId = prgId;
      this.initForm();
      const now = new Date();
      // convertir a local ISO y quitar segundos/milisegundos
      const tzOffset = now.getTimezoneOffset() * 60000; // en ms
      const localISO = new Date(now.getTime() - tzOffset).toISOString().slice(0, 16);
      this.today = localISO; // "2025-12-06T10:30"
    }
  }

  initForm() {
    this.form = new FormGroup({
      comment: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      durationMin: new FormControl('', Validators.required),
    });
  }

  async onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const payload = {
      date: this.form.value.date,
      durationMin: Number(this.form.value.durationMin),
      comment: this.form.value.comment,
      programmerId: this.programmerId,
      userId: this.user.uid,
    };

    this.http.post(APP_ROUTES.main.childrens.asesorias_new.apiPath, payload).subscribe({
      next: (v: any) => {
        if (v.success) {
          this.toast.success('Guardado correctamente', 'Hecho');
          setTimeout(() => {
            this.router.navigate([APP_ROUTES.main.childrens.asesorias.absolutePath]);
            }, 5000);
        }
      },
      error: (err) => {
        if(err.error.message){
          this.toast.error(err.error.message,"Control")
        }
      },
    });
  }
}
