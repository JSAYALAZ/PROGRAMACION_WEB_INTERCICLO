import { Component, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

// import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { APP_ROUTES } from '../../app.routes';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  imports: [ReactiveFormsModule,NgStyle],
})
export class LoginPage {
  authForm!: FormGroup;

  googleAuthProvider = new GoogleAuthProvider();

  auth = inject(Auth);

  loadingSubmit: boolean = false;
  constructor(private router: Router, private http: HttpClient) {}

  loginWithGoogle() {
    signInWithPopup(this.auth, this.googleAuthProvider)
      .then((res) => {
        const googleUser = res.user;

        const payload = {
          firebaseUid: googleUser.uid,
          email: googleUser.email,
          displayName: googleUser.displayName,
          foto_perfil: googleUser.photoURL,
        };

        this.http.post(APP_ROUTES.main.childrens.usuarios.apiPath, payload).subscribe({
          next: (res: any) => {
            // Guardar info mínima en el localStorage
            localStorage.setItem('rol', res.data.rol);
            localStorage.setItem('userId', res.data.id);

            this.redirectMain();
          },
          error: (err) => {
            console.error('Error guardando usuario:', err);
          },
        });
      })
      .catch((err) => {
        console.error('Error con Google:', err);
      });
  }

  redirectMain() {
    this.router.navigate([APP_ROUTES.main.path]);
  }
}
