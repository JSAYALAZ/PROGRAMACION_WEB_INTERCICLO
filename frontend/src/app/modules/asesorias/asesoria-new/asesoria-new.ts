import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from '../../../app.routes';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asesoria-new',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './asesoria-new.html',
  styleUrl: './asesoria-new.css',
})
export class AsesoriaNew implements OnInit {
  programmerId = '';
  form!: FormGroup;
  private activateRoute = inject(ActivatedRoute);
  user: User = this.activateRoute.parent?.snapshot.data['user'];

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}
  ngOnInit() {
    const prgId = this.route.snapshot.queryParamMap.get('programmerId');
    if (!prgId) {
      APP_ROUTES.main.childrens.main.absolutePath;
    } else {
      this.programmerId = prgId;
      this.initForm();
      console.log('ID del programador:', prgId);
    }
  }

  initForm() {
    this.form = new FormGroup({
      commet: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      hour: new FormControl('', Validators.required),
      durationMin: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const payload = {
      date: getDayInDate(this.form.value.date),
      hour: timeToMinutes(this.form.value.hour),
      durationMin: Number(this.form.value.durationMin),
      commet: this.form.value.comment,
      programmerId: this.programmerId,
      userId: this.user.uid,
    };

    try {
      this.http
        .post(APP_ROUTES.main.childrens.asesorias_new.apiPath, payload)
        .pipe()
        .subscribe((res) => {
          console.log(res);
        });
      this.router.navigate([APP_ROUTES.main.childrens.asesorias.absolutePath]);
    } catch (error) {
      console.log(error);
    }
  }
}
const getDayInDate = (date: string): WeekdayValue | null => {
  if (!date) return null;
  const d = new Date(`${date}T00:00:00`);
  if (isNaN(d.getTime())) return null;
  switch (d.getDay()) {
    case 0:
      return Weekday.SUN;
    case 1:
      return Weekday.MON;
    case 2:
      return Weekday.TUE;
    case 3:
      return Weekday.WED;
    case 4:
      return Weekday.THU;
    case 5:
      return Weekday.FRI;
    case 6:
      return Weekday.SAT;
    default:
      return null;
  }
};

const timeToMinutes = (time: string): number | null => {
  if (!time) return null;
  const [hh, mm] = time.split(':').map((n) => parseInt(n, 10));
  if (Number.isNaN(hh) || Number.isNaN(mm)) return null;
  return hh * 60 + mm;
};

export const Weekday = {
  MON: 'MON',
  TUE: 'TUE',
  WED: 'WED',
  THU: 'THU',
  FRI: 'FRI',
  SAT: 'SAT',
  SUN: 'SUN',
} as const;

type WeekdayValue = (typeof Weekday)[keyof typeof Weekday];
