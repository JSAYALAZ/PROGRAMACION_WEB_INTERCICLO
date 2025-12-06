import { Component, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

// import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { APP_ROUTES } from '../../app.routes';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class LoginPage {
  authForm!: FormGroup;

  googleAuthProvider = new GoogleAuthProvider();

  auth = inject(Auth);

  loadingSubmit: boolean = false;
  constructor(
    // private toast: ToastService,
    private router: Router,
    private http: HttpClient
  ) {
    // this.initForm();
  }

  // initForm() {
  //   this.authForm = new FormGroup({
  //     email: new FormControl('', Validators.required),
  //     password: new FormControl('', Validators.required),
  //   });
  // }

  // async onSubmit() {
  //   this.loadingSubmit = true;
  //   // this.toast.error('Completa la informacion');
  //   if (!this.authForm.valid) {
  //     this.loadingSubmit = false;
  //     return;
  //   }

  //   try {
  //     const credential = await signInWithEmailAndPassword(
  //       this.auth,
  //       this.authForm.value.email,
  //       this.authForm.value.password
  //     );
  //     console.log(credential);

  //     // const uid = credential.user.uid;
  //     // const email = credential.user.email;
  //     // this.http
  //     //   .post('https://localhost:3000/api/users', {
  //     //     uid,
  //     //     email,
  //     //   })
  //     //   .subscribe((data) => {
  //     //     console.log(data);
  //     //   });
  //     this.redirectMain();
  //   } catch (err: any) {
  //     console.log(err);

  //     if (err instanceof Error) {
  //       // this.toast.warn('Datos de inicio de session incorrectos');
  //       // if (err.message == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
  //       // }
  //     }
  //   } finally {
  //     this.loadingSubmit = false;
  //   }
  // }

  loginWithGoogle() {
    signInWithPopup(this.auth, this.googleAuthProvider)
      .then((res) => {
        const object = {
          firebaseUid: res.user.uid,
          email: res.user.email,
          displayName: res.user.displayName,
          foto_perfil: res.user.photoURL,
        };

        this.http.post(APP_ROUTES.main.childrens.usuarios.apiPath, object).subscribe((data) => {});
        this.redirectMain();
      })
      .catch(
        (err) => {}
        // this.toast.error(err.message || 'No se logro crear la cuenta')
      );
  }

  redirectMain() {
    this.router.navigate([APP_ROUTES.main.path]);
  }
}
