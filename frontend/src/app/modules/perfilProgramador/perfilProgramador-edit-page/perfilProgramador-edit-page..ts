import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ValidationErrors,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { APP_ROUTES } from '../../../app.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@angular/fire/auth';

// Función auxiliar para convertir tiempo HH:MM a minutos (entero)
const timeToMinutes = (time: string): number | null => {
  if (!time) return null;
  const [hh, mm] = time.split(':').map((n) => parseInt(n, 10));
  if (Number.isNaN(hh) || Number.isNaN(mm)) return null;
  return hh * 60 + mm;
};

// ⚠️ VALIDADOR PERSONALIZADO para el rango de tiempo
const timeRangeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const group = control as FormGroup;
  const s = group.get('startTime')?.value;
  const e = group.get('endTime')?.value;

  if (!s || !e) {
    // Permitimos que Validators.required maneje los campos vacíos
    return null;
  }

  const startMinutes = timeToMinutes(s);
  const endMinutes = timeToMinutes(e);

  // Si las horas son válidas y la hora de inicio es igual o posterior a la hora de fin
  if (startMinutes !== null && endMinutes !== null && startMinutes >= endMinutes) {
    return { timeRangeInvalid: true };
  }

  return null;
};

@Component({
  selector: 'app-programmer-profile-form',
  // Asegúrate de que el template URL sea correcto, he incluido el contenido completo abajo
  templateUrl: './perfilProgramador-edit-page..html',
  standalone: true, // Si usas Angular 15+ standalone, si no, elimina esta línea
  imports: [ReactiveFormsModule, CommonModule],
})
export class ProgrammerProfileFormComponent implements OnInit {
  private activateRoute = inject(ActivatedRoute);
  @Input() submitting = false;
  user: User = this.activateRoute.parent?.snapshot.data['user'];
  form!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      bio: ['', [Validators.required, Validators.maxLength(1000)]],
      specialty: ['', [Validators.maxLength(120)]],
      // Inicializamos con un grupo por defecto
      disponibilidad: this.fb.array([this.createDisponibilidadGroup()]),
    });
  }

  // Getter
  get disponibilidad(): FormArray {
    return this.form.get('disponibilidad') as FormArray;
  }

  createDisponibilidadGroup() {
    return this.fb.group(
      {
        // ⚠️ FIX: Inicializamos 'day' con 'MON' para que el Validators.required pase la validación inicial
        day: ['MON', Validators.required],
        startTime: ['', Validators.required],
        endTime: ['', Validators.required],
      },
      { validators: timeRangeValidator }
    ); // ⬅️ Aplicamos el validador de rango al FormGroup
  }

  addDisponibilidad() {
    this.disponibilidad.push(this.createDisponibilidadGroup());
  }

  removeDisponibilidad(index: number) {
    if (this.disponibilidad.length > 1) {
      this.disponibilidad.removeAt(index);
    }
  }

  // Esta función ya no es necesaria para la validación del formulario (gracias al timeRangeValidator)
  // pero la mantenemos para transformar el dato de hora a minutos en el payload.
  private timeToMinutesString(time: string): string {
    const minutes = timeToMinutes(time);
    return minutes !== null ? String(minutes) : '';
  }

  // Se eliminó validateDisponibilidades, ya que ahora el validador hace el trabajo.

  onSubmit() {
    this.form.markAllAsTouched(); // Muestra todos los errores

    if (this.form.invalid) {
      console.log('Formulario Inválido', this.form.errors);
      return;
    }

    const payload = {
      userId: this.user.uid,
      bio: this.form.value.bio,
      specialty: this.form.value.specialty,
      // Mapeo de disponibilidad para el payload de la API
      disponibilidad: this.form.value.disponibilidad.map((d: any) => ({
        day: d.day,
        startMinutes: this.timeToMinutesString(d.startTime),
        endMinutes: this.timeToMinutesString(d.endTime),
      })),
    };

    try {
      this.http
        .put(APP_ROUTES.main.childrens.perfilProgramador_edit.apiPath, payload)
        .pipe()
        .subscribe((res) => {
          console.log(res);
        });
      this.router.navigate([APP_ROUTES.main.childrens.perfilProgramador.absolutePath]);
    } catch (error) {
      console.log(error);
    }
  }

  // Función auxiliar mejorada para manejar errores en FormArray
  controlError(controlPath: string, errorKey?: string) {
    const ctrl = this.form.get(controlPath);
    if (!ctrl) return false;

    // Si es un FormArray/FormGroup anidado (ej: 'disponibilidad.0.day' o solo 'disponibilidad.0')
    if (controlPath.includes('.')) {
      const parts = controlPath.split('.');
      const arrayName = parts[0]; // 'disponibilidad'
      const index = parseInt(parts[1], 10); // '0'
      const controlName = parts[2]; // 'day', 'startTime', 'endTime', etc.

      const array = this.form.get(arrayName) as FormArray;
      const group = array?.at(index) as FormGroup;

      // Si pedimos error del control dentro del grupo
      if (controlName) {
        const control = group?.get(controlName);
        if (!control) return false;
        return errorKey
          ? control.hasError(errorKey) && (control.dirty || control.touched)
          : control.invalid && (control.dirty || control.touched);
      }

      // Si pedimos error del FormGroup completo (para timeRangeInvalid)
      return errorKey
        ? group.hasError(errorKey) && (group.dirty || group.touched)
        : group.invalid && (group.dirty || group.touched);
    }

    // Para controles de nivel superior (bio, specialty)
    return errorKey
      ? ctrl.hasError(errorKey) && (ctrl.dirty || ctrl.touched)
      : ctrl.invalid && (ctrl.dirty || ctrl.touched);
  }
}
