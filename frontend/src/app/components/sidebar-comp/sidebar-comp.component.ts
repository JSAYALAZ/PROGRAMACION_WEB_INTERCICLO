import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SignOutComponent } from '../buttons/sign-out/sign-out.component';
import { OptionsSidebarComponent } from '../buttons/options-sidebar/options-sidebar.component';
import { APP_ROUTES } from '../../app.routes';

@Component({
  selector: 'app-sidebar-comp',
  standalone: true,
  imports: [
    CommonModule,
    // DarkButtonComponent,

    SignOutComponent,
    OptionsSidebarComponent,
  ],
  templateUrl: './sidebar-comp.component.html',
  styleUrl: './sidebar-comp.component.css',
})
export class SidebarCompComponent implements OnInit {
  pinUp = true;
  modules = [
    {
      name: 'Inicio',
      code: 'HOME',
      routes: {
        main: { path: APP_ROUTES.main.childrens.main.absolutePath },
      },
    },
    {
      name: 'Proyectos',
      code: 'PROYECTOS',
      routes: {
        main: { path: APP_ROUTES.main.childrens.proyectos.absolutePath },
      },
    },
    {
      name: 'Usuarios',
      code: 'USUARIOS',
      routes: {
        main: { path: APP_ROUTES.main.childrens.usuarios.absolutePath },
      },
    },
    {
      name: 'Asesorias',
      code: 'ASESORIAS',
      routes: {
        main: { path: APP_ROUTES.main.childrens.asesorias.absolutePath },
      },
    },
    {
      name: 'Portafolio',
      code: 'PORTAFOLIO',
      routes: {
        main: { path: APP_ROUTES.main.childrens.portafolio.absolutePath },
      },
    },
    {
      name: 'Citas',
      code: 'CITAS',
      routes: {
        main: { path: APP_ROUTES.main.childrens.citas.absolutePath },
      },
    },
  ];
  onSelect(path: string) {}
  select(path: string) {}

  ngOnInit(): void {}
}
