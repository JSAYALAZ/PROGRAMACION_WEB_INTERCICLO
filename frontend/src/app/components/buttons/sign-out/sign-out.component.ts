import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';

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

  onSignOut() {
    signOut(this.auth);
  }
}
