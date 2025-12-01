import { Component, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private activateRoute = inject(ActivatedRoute)

  user: User = this.activateRoute.snapshot.data["user"]

  constructor(){
    console.log(this.user);
    
  }
}
