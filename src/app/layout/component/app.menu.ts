import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';  
import { AppMenuitem } from './app.menuitem';
import { AuthService } from '../../pages/auth/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule],
  template: `
    <ul class="layout-menu">
      <ng-container *ngFor="let item of model; let i = index">
        <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
        <li *ngIf="item.separator" class="menu-separator"></li>
      </ng-container>
    </ul>
  `
})
export class AppMenu implements OnInit {
  model: MenuItem[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const role = this.authService.getUserRole();  // Récupère le rôle de l'utilisateur

    if (role === 'admin') {
      this.model = [
        {
          label: 'Admin',
          items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            { label: 'Admin Panel', icon: 'pi pi-fw pi-cogs', routerLink: ['/admin'] }
          ]
        },
        {
          label: 'Settings',
          items: [{ label: 'Manage Users', icon: 'pi pi-fw pi-users', routerLink: ['/settings/users'] }]
        }
      ];
    } else if (role === 'client') {
      this.model = [
        {
          label: 'User',
          items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
            { label: 'Demande Réparation', icon: 'pi pi-fw pi-home', routerLink: ['/reparation'] }
          ]
        }
      ];
    } else if (role === 'mecanicien') {
        this.model = [
          {
            label: 'Mécanicien',
            items: [
              { label: 'Réparation assignés', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
            ]
          }
        ];
      } else {
      this.model = [
        {
          label: 'Public',
          items: [
            { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/auth/login'] }
          ]
        }
      ];
    }
  }
}
