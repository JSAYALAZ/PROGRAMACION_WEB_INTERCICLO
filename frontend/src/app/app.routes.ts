import { Routes } from '@angular/router';
import { UserResolver } from './services/user-resolver.service';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginPage } from './pages/login-page/login-page.component';
import { SignupPage } from './pages/signup-page/signup-page.component';
import { MainPage } from './pages/main-page/main-page.component';
import { Home } from './modules/home/home';
import { UsersMainPage } from './modules/usuarios/users-main-page/users-main-page';
import { ProyectosMainPage } from './modules/proyectos/proyectos-main-page/proyectos-main-page';
import { AsesoriasMainPage } from './asesorias/asesorias-main-page/asesorias-main-page';

function redirectToLogin() {
  redirectUnauthorizedTo('/login');
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
  signup: {
    path: 'registrarse',
    component: SignupPage,
  },
  main: {
    path: 'idx',
    component: MainPage,
    childrens: {
      main: { path: '', absolutePath: 'idx/', component: Home },
      usuarios: {
        path: 'usuarios',
        absolutePath: 'idx/usuarios',
        component: UsersMainPage,
        apiPath: 'https://localhost:3000/api/users',
      },
      proyectos: {
        path: 'proyectos',
        absolutePath: 'idx/proyectos',
        component: ProyectosMainPage,
        apiPath: 'https://localhost:3000/api/proyects',
      },
      asesorias: {
        path: 'asesorias',
        absolutePath: 'idx/asesorias',
        component: AsesoriasMainPage,
        apiPath: 'https://localhost:3000/api/asesorias',
      },
    },
  },
};

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: APP_ROUTES.login.path,
    component: APP_ROUTES.login.component,
  },
  {
    path: APP_ROUTES.signup.path,
    component: APP_ROUTES.signup.component,
  },
  {
    path: APP_ROUTES.main.path,
    component: APP_ROUTES.main.component,
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
      {
        path: APP_ROUTES.main.childrens.proyectos.path,
        component: APP_ROUTES.main.childrens.proyectos.component,
      },
      {
        path: APP_ROUTES.main.childrens.asesorias.path,
        component: APP_ROUTES.main.childrens.asesorias.component,
      },
      {
        path: APP_ROUTES.main.childrens.usuarios.path,
        component: APP_ROUTES.main.childrens.usuarios.component,
      },
    ],
  },
];
