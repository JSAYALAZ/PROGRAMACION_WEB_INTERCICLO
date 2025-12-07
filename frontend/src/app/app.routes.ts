import { Routes } from '@angular/router';
import { UserResolver } from './services/user-resolver.service';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginPage } from './pages/login-page/login-page.component';
import { MainPage } from './pages/main-page/main-page.component';
import { Home } from './modules/home/home';
import { UsersMainPage } from './modules/usuarios/users-main-page/users-main-page';
import { ProyectosMainPage } from './modules/proyectos/proyectos-main-page/proyectos-main-page';
import { UserEditPage } from './modules/usuarios/user-edit-page/user-edit-page';
import { PortafolioMainPage } from './modules/portafolio/portafolio-main-page/portafolio-main-page';
import { ProyectosNewPage } from './modules/proyectos/proyectos-new-page/proyectos-new-page';
import { AsesoriasMainPage } from './modules/asesorias/asesorias-main-page/asesorias-main-page';
import { PerfilProgramadorMainPage } from './modules/perfilProgramador/perfilProgramador-main-page/perfilProgramador-main-page';
import { PortafolioView } from './modules/portafolio/portafolio-view/portafolio-view';
import { PerfilProgActions } from './modules/perfilProgramador/perfil-prog-actions/perfil-prog-actions';
import { ProgrammerProfileFormComponent } from './modules/perfilProgramador/perfilProgramador-edit-page/perfilProgramador-edit-page.';
import { AsesoriaNew } from './modules/asesorias/asesoria-new/asesoria-new';
import { CitasMainPage } from './modules/citas/citas-main-page/citas-main-page';
import { PortafolioEdit } from './modules/portafolio/portafolio-edit/portafolio-edit';
import { AsesoriaEdit } from './modules/asesorias/asesoria-edit/asesoria-edit';

export const environment = {
  production: false,
  api: 'https://programacion-web-interciclo.onrender.com/api/',
};

function redirectToLogin() {
  redirectUnauthorizedTo(APP_ROUTES.login.path);
}
/** Una ruta protegida concreta */
export interface RouteConfig {
  /** Path relativo, sin dominio */
  path: string; // "/ventas/nueva"
  /** React component o handler */
  // handler: RouteHandler; // React.FC lazy | API handler
}

export interface ModuleRoute {
  name: string; // "Gestor de Ventas"
  api_path: string; // "/api/ventas"
  routes: Record<string, RouteConfig>;
}

export const APP_ROUTES = {
  login: {
    path: 'login',
    component: LoginPage,
  },
  // signup: {
  //   path: 'registrarse',
  //   component: SignupPage,
  // },
  main: {
    path: 'idx',
    component: MainPage,
    childrens: {
      main: { path: '', absolutePath: 'idx/', component: Home },
      usuarios: {
        path: 'usuarios',
        absolutePath: 'idx/usuarios',
        component: UsersMainPage,
        apiPath: `${environment.api}user`,
      },
      usuarios_edit: {
        path: 'usuarios/:id/edit',
        absolutePath: 'idx/usuarios/:id/edit',
        component: UserEditPage,
        apiPath: `${environment.api}user`,
      },
      proyectos: {
        path: 'proyectos',
        absolutePath: 'idx/proyectos',
        component: ProyectosMainPage,
        apiPath: `${environment.api}proyect`,
      },
      proyectos_new: {
        path: 'proyectos/new',
        absolutePath: 'idx/proyectos/new',
        component: ProyectosNewPage,
        apiPath: `${environment.api}proyect`,
      },
      //Asesorias
      asesorias: {
        path: 'asesorias',
        absolutePath: 'idx/asesorias',
        component: AsesoriasMainPage,
        apiPath: `${environment.api}asesoria`,
      },
      asesorias_new: {
        path: 'asesorias/new',
        absolutePath: 'idx/asesorias/new',
        component: AsesoriaNew,
        apiPath: `${environment.api}asesoria`,
      },
      asesorias_edit: {
        path: 'asesorias/:id/edit',
        absolutePath: 'idx/asesorias/:id/edit',
        component: AsesoriaEdit,
        apiPath: `${environment.api}asesoria`,
      },
      //Portafoli
      portafolio: {
        path: 'portafolio',
        absolutePath: 'idx/portafolio',
        component: PortafolioMainPage,
        apiPath: `${environment.api}portafolio`,
      },
      portafolio_view: {
        path: 'portafolio/:id/view',
        absolutePath: 'idx/portafolio/:id/view',
        component: PortafolioView,
        apiPath: `${environment.api}portafolio`,
      },
      portafolio_edit: {
        path: 'portafolio/:id/edit',
        absolutePath: 'idx/portafolio/:id/edit',
        component: PortafolioEdit,
        apiPath: `${environment.api}portafolio`,
      },
      //Citas
      citas: {
        path: 'citas',
        absolutePath: 'idx/citas',
        component: CitasMainPage,
        apiPath: `${environment.api}citas`,
      },
      perfilProgramador: {
        path: 'programmer-profile',
        absolutePath: 'idx/programmer-profile',
        component: PerfilProgramadorMainPage,
        apiPath: `${environment.api}programmerProfile`,
      },
      perfilProgramador_edit: {
        path: 'programmer-profile-edit',
        absolutePath: 'idx/programmer-profile-edit',
        component: ProgrammerProfileFormComponent,
        apiPath: `${environment.api}programmerProfile`,
      },
      perfilProgramador_actions: {
        path: 'programmer-profile-actions',
        absolutePath: 'idx/programmer-profile-actions',
        component: PerfilProgActions,
        apiPath: `${environment.api}programmerProfile`,
      },
    },
  },
};

export const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.login.path, pathMatch: 'full' },
  {
    path: APP_ROUTES.login.path,
    component: APP_ROUTES.login.component,
  },
  // {
  //   path: APP_ROUTES.signup.path,
  //   component: APP_ROUTES.signup.component,
  // },
  {
    path: APP_ROUTES.main.path,
    component: APP_ROUTES.main.component,
    canActivate: [AuthGuard],
    data: {
      AuthGuardPipe: redirectToLogin,
    },
    resolve: {
      user: UserResolver,
    },
    children: [
      {
        path: APP_ROUTES.main.childrens.main.path,
        component: APP_ROUTES.main.childrens.main.component,
      },
      //Proyectos
      {
        path: APP_ROUTES.main.childrens.proyectos.path,
        component: APP_ROUTES.main.childrens.proyectos.component,
      },
      {
        path: APP_ROUTES.main.childrens.proyectos_new.path,
        component: APP_ROUTES.main.childrens.proyectos_new.component,
      },

      //Asesorias
      {
        path: APP_ROUTES.main.childrens.asesorias.path,
        component: APP_ROUTES.main.childrens.asesorias.component,
      },
      {
        path: APP_ROUTES.main.childrens.asesorias_new.path,
        component: APP_ROUTES.main.childrens.asesorias_new.component,
      },
      {
        path: APP_ROUTES.main.childrens.asesorias_edit.path,
        component: APP_ROUTES.main.childrens.asesorias_edit.component,
      },
      //USUARIOS
      {
        path: APP_ROUTES.main.childrens.usuarios.path,
        component: APP_ROUTES.main.childrens.usuarios.component,
      },
      {
        path: APP_ROUTES.main.childrens.usuarios_edit.path,
        component: APP_ROUTES.main.childrens.usuarios_edit.component,
      },
      //Portafolio
      {
        path: APP_ROUTES.main.childrens.portafolio.path,
        component: APP_ROUTES.main.childrens.portafolio.component,
      },
      {
        path: APP_ROUTES.main.childrens.portafolio_view.path,
        component: APP_ROUTES.main.childrens.portafolio_view.component,
      },
      {
        path: APP_ROUTES.main.childrens.portafolio_edit.path,
        component: APP_ROUTES.main.childrens.portafolio_edit.component,
      },
      //Citas
      {
        path: APP_ROUTES.main.childrens.citas.path,
        component: APP_ROUTES.main.childrens.citas.component,
      },

      //Perfil de programador
      {
        path: APP_ROUTES.main.childrens.perfilProgramador.path,
        component: APP_ROUTES.main.childrens.perfilProgramador.component,
      },
      //Acciones de programador
      {
        path: APP_ROUTES.main.childrens.perfilProgramador_actions.path,
        component: APP_ROUTES.main.childrens.perfilProgramador_actions.component,
      },
      {
        path: APP_ROUTES.main.childrens.perfilProgramador_edit.path,
        component: APP_ROUTES.main.childrens.perfilProgramador_edit.component,
      },
    ],
  },
];
