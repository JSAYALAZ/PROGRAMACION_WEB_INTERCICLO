import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-sidebar',
  templateUrl: './options-sidebar.component.html',
  standalone:true,
  imports:[CommonModule]
})
export class OptionsSidebarComponent {
  @Input() text = '';
  @Input() url = '';

  @Output() clicked = new EventEmitter<void>();

  constructor(private router: Router) {}

  handleClick() {
    this.clicked.emit();       // notifica al padre
    this.router.navigate([this.url]); // navega
  }
}
