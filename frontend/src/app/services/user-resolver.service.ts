import { inject, Injectable } from '@angular/core';
import { Auth, authState, User } from '@angular/fire/auth';
import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  RedirectCommand,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<User> {
  auth = inject(Auth);

  user$ = authState(this.auth).pipe(
    filter((user) => user != null),
    map((user) => user!)
  );

  //Resolver the user data
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<User | RedirectCommand> {
    return this.user$;
  }
}
