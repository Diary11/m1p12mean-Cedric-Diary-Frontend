import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Notfound } from './app/pages/notfound/notfound';
import { AuthGuard } from './app/pages/auth/auth.guard';
import { RoleGuard } from './app/pages/auth/role.guard';
import { InsertUsers } from './app/pages/auth/InsertUsers';
import { Reparation } from './app/pages/reparation/reparation';
import { InsertServiceWidget } from './app/pages/auth/insertServiceWidget';
import { StatistiqueReparation } from './app/pages/auth/statistiqueReparation';
import { Accueil } from './app/pages/auth/accueil'; 

export const appRoutes: Routes = [
  { path: '', component: Accueil }, // Page d'accueil à la racine
  //{ path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: '',
    component: AppLayout,
    children: [
      { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
      { path: 'reparation', component: Reparation, canActivate: [AuthGuard] },
      { path: 'admin', component: Dashboard, canActivate: [AuthGuard, RoleGuard] },  
      { path: 'ajoutService', component: InsertServiceWidget, canActivate: [AuthGuard, RoleGuard] },  
      { path: 'ajoutMecano', component: InsertUsers, canActivate: [AuthGuard, RoleGuard],data: { mode: 'mecanicien' }}, 
      { path: 'statreparation', component: StatistiqueReparation, canActivate: [AuthGuard, RoleGuard]},  
      { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
    ]
  },
  { path: 'insert-client', component: InsertUsers,data: { mode: 'client' }},
  { path: 'login-client', redirectTo: '/auth/login?role=client', pathMatch: 'full' },
  { path: 'login-mecanicien', redirectTo: '/auth/login?role=mecano', pathMatch: 'full' },
  { path: 'login-admin', redirectTo: '/auth/login?role=admin', pathMatch: 'full' },
  { path: 'insertUsers', component: InsertUsers },
  { path: 'notfound', component: Notfound },
  { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
  { path: '**', redirectTo: '/notfound' },
];
