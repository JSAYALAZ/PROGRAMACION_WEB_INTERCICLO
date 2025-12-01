import { Component, inject } from '@angular/core';
import {
  Auth,
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
// import { ToastService } from '../../services/toast.service';
import { HttpClient } from '@angular/common/http';
import { APP_ROUTES } from '../../app.routes';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class SignupPage {
  authForm!: FormGroup;

  googleAuthProvider = new GoogleAuthProvider();

  auth = inject(Auth);

  loadingSubmit: boolean = false;
  constructor(
    // private toast: ToastService,
    private router: Router,
    private http: HttpClient
  ) {
    this.initForm();
  }

  initForm() {
    this.authForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      user: new FormControl('', Validators.required),
    });
  }

  async onSubmit() {
    console.log("aqui");
    console.log(this.loadingSubmit);
    
    
    if (this.loadingSubmit) return;
    this.loadingSubmit = true;
    // this.toast.error('Completa la informacion');
    if (!this.authForm.valid) {
      this.loadingSubmit = false;
      return;
    }

    try {
      const credential = await createUserWithEmailAndPassword(
        this.auth,
        this.authForm.value.email,
        this.authForm.value.password
      );
      console.log(credential);

      const uid = credential.user.uid;
      const email = credential.user.email;
      this.http
        .post('https://localhost:3000/api/users', {
          uid,
          email,
        })
        .subscribe((data) => {
          console.log(data);
        });
    } catch (error: any) {
      console.log(error);

      if (error instanceof Error) {
        // if (error.message.includes(AuthErrorCodes.INVALID_EMAIL)) {
        //   this.toast.warn('Email is not val id');
        // } else if (error.message.includes(AuthErrorCodes.WEAK_PASSWORD)) {
        //   this.toast.warn('Please enter a stronger password');
        // } else if (error.message.includes(AuthErrorCodes.EMAIL_EXISTS)) {
        //   this.toast.warn('The email is already used for another account');
        // } else {
        //   this.toast.error('Something went wrong, please try again. ');
        // }
      }
    } finally {
      this.loadingSubmit = false;
    }
  }

  async createUserWithGoogle() {
    if (this.loadingSubmit) return;
    this.loadingSubmit = true;
    try {
      await signInWithPopup(this.auth, this.googleAuthProvider);
      this.redirectMain();
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        // this.toast.error('Something went wrong, please try again. ');
      }
    } finally {
      this.loadingSubmit = false;
    }
  }

  redirectMain() {
    this.router.navigate([APP_ROUTES.main.path]);
  }
}
