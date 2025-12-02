import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../../app.routes';

@Component({
  selector: 'app-sign-out',
  standalone: true,
  imports: [],
  templateUrl: './sign-out.component.html',
  styleUrl: './sign-out.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignOutComponent {
  auth = inject(Auth);
  private router = inject(Router)

  onSignOut() {
    signOut(this.auth).then(res=>{
      this.router.navigate([APP_ROUTES.login.path])
    });
  }
}
