import { Component, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SidebarCompComponent } from '../../components/sidebar-comp/sidebar-comp.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone:true,
  imports: [SidebarCompComponent, RouterOutlet, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPage {
  private activeRoute = inject(ActivatedRoute);

  user: User = this.activeRoute.snapshot.data['user'];

  constructor() {
  }
}
