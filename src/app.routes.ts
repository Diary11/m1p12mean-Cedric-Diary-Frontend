import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Notfound } from './app/pages/notfound/notfound';
import { AuthGuard } from './app/pages/auth/auth.guard';
import { RoleGuard } from './app/pages/auth/role.guard';
import { ReparationComponent } from './app/pages/reparation/reparation';
import { CalendrierComponent } from './app/pages/reparation/components/calendrier/calendrier.component';
import { InsertServiceWidget } from './app/pages/auth/insertServiceWidget';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  /*{
    path: 'reparation/calendrier',
    loadComponent: () => import('./app/pages/reparation/components/calendrier/calendrier.component').then(m => m.CalendrierComponent)
  },*/
  {
    path: '',
    component: AppLayout,
    children: [
      { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
      { path: 'reparation', component: ReparationComponent, canActivate: [AuthGuard] },
      { path: 'reparation/calendrier', component: CalendrierComponent, canActivate: [AuthGuard] },
      { path: 'admin', component: Dashboard, canActivate: [AuthGuard, RoleGuard] }, // Admin only
      { path: 'ajoutService', component: InsertServiceWidget, canActivate: [AuthGuard, RoleGuard] }, // Déplacé ici
      { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
    ]
  },
  { path: 'notfound', component: Notfound },
  { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
  { path: '**', redirectTo: '/notfound' },
];
