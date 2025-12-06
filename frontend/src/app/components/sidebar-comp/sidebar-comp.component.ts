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
    SignOutComponent,
    OptionsSidebarComponent,
  ],
  templateUrl: './sidebar-comp.component.html',
})
export class SidebarCompComponent implements OnInit {
  pinUp = true;
  rol = 'USER';

  modules = [
    {
      name: 'Inicio',
      rol: 'ANY',
      routes: {
        main: { path: APP_ROUTES.main.childrens.main.absolutePath },
      },
    },
    {
      name: 'Proyectos',
      rol: 'ANY',
      routes: {
        main: { path: APP_ROUTES.main.childrens.proyectos.absolutePath },
      },
    },
    {
      name: 'Usuarios',
      rol: 'ADMIN',
      routes: {
        main: { path: APP_ROUTES.main.childrens.usuarios.absolutePath },
      },
    },
    {
      name: 'Asesorias',
      rol: 'USER',
      routes: {
        main: { path: APP_ROUTES.main.childrens.asesorias.absolutePath },
      },
    },
    {
      name: 'Portafolio',
      rol: 'ANY',
      routes: {
        main: { path: APP_ROUTES.main.childrens.portafolio.absolutePath },
      },
    },
    {
      name: 'Citas',
      rol: 'PROGRAMMER',
      routes: {
        main: { path: APP_ROUTES.main.childrens.citas.absolutePath },
      },
    },
    {
      name: 'Programadores',
      rol: 'USER',
      routes: {
        main: { path: APP_ROUTES.main.childrens.perfilProgramador.absolutePath },
      },
    },
    {
      name: 'Acciones para programador',
      rol: 'PROGRAMMER',
      routes: {
        main: { path: APP_ROUTES.main.childrens.perfilProgramador_actions.absolutePath },
      },
    },
  ];
  onSelect(path: string) {}

  ngOnInit(): void {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('rol') : null;
    this.rol = stored ?? 'USER';
  }
}
