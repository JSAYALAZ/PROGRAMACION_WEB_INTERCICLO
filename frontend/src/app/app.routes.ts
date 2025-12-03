import { Routes } from '@angular/router';
import { UserResolver } from './services/user-resolver.service';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginPage } from './pages/login-page/login-page.component';
import { SignupPage } from './pages/signup-page/signup-page.component';
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
        apiPath: 'http://localhost:3000/api/user',
      },
      usuarios_edit: {
        path: 'usuarios/:id/edit',
        absolutePath: 'idx/usuarios/:id/edit',
        component: UserEditPage,
        apiPath: 'http://localhost:3000/api/user',
      },
      proyectos: {
        path: 'proyectos',
        absolutePath: 'idx/proyectos',
        component: ProyectosMainPage,
        apiPath: 'http://localhost:3000/api/proyect',
      },
      proyectos_new: {
        path: 'proyectos/new',
        absolutePath: 'idx/proyectos/new',
        component: ProyectosNewPage,
        apiPath: 'http://localhost:3000/api/proyect',
      },
      asesorias: {
        path: 'asesorias',
        absolutePath: 'idx/asesorias',
        component: AsesoriasMainPage,
        apiPath: 'http://localhost:3000/api/asesorias',
      },
      //Portafoli
      portafolio: {
        path: 'portafolio',
        absolutePath: 'idx/portafolio',
        component: PortafolioMainPage,
        apiPath: 'http://localhost:3000/api/portafolio',
      },
      portafolio_view: {
        path: 'portafolio/:id/view',
        absolutePath: 'idx/portafolio/:id/view',
        component: PortafolioView,
        apiPath: 'http://localhost:3000/api/portafolio',
      },
      //Citas
      citas: {
        path: 'citas',
        absolutePath: 'idx/citas',
        component: AsesoriasMainPage,
        apiPath: 'http://localhost:3000/api/citas',
      },
      perfilProgramador: {
        path: 'programmer-profile',
        absolutePath: 'idx/programmer-profile',
        component: PerfilProgramadorMainPage,
        apiPath: 'http://localhost:3000/api/programmerProfile',
      },
      perfilProgramador_edit: {
        path: 'programmer-profile-edit',
        absolutePath: 'idx/programmer-profile-edit',
        component: ProgrammerProfileFormComponent,
        apiPath: 'http://localhost:3000/api/programmerProfile',
      },
      perfilProgramador_actions: {
        path: 'programmer-profile-actions',
        absolutePath: 'idx/programmer-profile-actions',
        component: PerfilProgActions,
        apiPath: 'http://localhost:3000/api/programmerProfile',
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
      {
        path: APP_ROUTES.main.childrens.asesorias.path,
        component: APP_ROUTES.main.childrens.asesorias.component,
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
