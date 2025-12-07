import { Component, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
// import { ToastService } from '../../services/toast.service';
import { HttpClient } from '@angular/common/http';
import { APP_ROUTES } from '../../app.routes';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class SignupPage {
  // authForm!: FormGroup;

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

  async createUserWithGoogle() {
    if (this.loadingSubmit) return;
    this.loadingSubmit = true;
    try {
      const credential = await signInWithPopup(this.auth, this.googleAuthProvider);
      const object = {
        firebaseUid: credential.user.uid,
        email: credential.user.email,
        displayName: 'Sin definir',
      };
      this.http.post(APP_ROUTES.main.childrens.usuarios.apiPath, object).subscribe((data) => {
        console.log(data);
      });
    } catch (error) {
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
