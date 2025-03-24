import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Notfound } from './app/pages/notfound/notfound';
import { AuthGuard } from './app/pages/auth/auth.guard';
import { RoleGuard } from './app/pages/auth/role.guard';
import { Reparation } from './app/pages/reparation/reparation';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: '',
    component: AppLayout,
    children: [
      { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
      { path: 'reparation', component: Reparation, canActivate: [AuthGuard] },
      { path: 'admin', component: Dashboard, canActivate: [AuthGuard, RoleGuard] }, // Admin only
      { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
    ]
  },
  { path: 'notfound', component: Notfound },
  { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
  { path: '**', redirectTo: '/notfound' }
];
