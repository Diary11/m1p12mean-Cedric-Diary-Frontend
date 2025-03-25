import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { delay } from 'rxjs/operators'; // Ajoutez ceci
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        PasswordModule,
        FormsModule,
        RouterModule,
        RippleModule,
        ProgressSpinnerModule,
        AppFloatingConfigurator,
      ],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'] 
})

// <p-button label="Sign In" styleClass="w-full" routerLink="/"></p-button>
export class Login {
    username: string = '';
    password: string = '';
    checked: boolean = false;
    errorMessage: string = '';
    isLoading: boolean = false;
  
    constructor(private authService: AuthService, private router: Router) {}
  
    onSignIn() {
      this.isLoading = true; // Active le spinner
      this.authService.login(this.username, this.password).pipe(delay(2000)).subscribe({
        next: (res: { token: string; role: string; }) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          alert('Identifiants invalides');
          this.isLoading = false; // Désactive le spinner en cas d'erreur
          this.errorMessage = 'Nom ou mot de passe incorrect';

        },
        complete: () => {
          this.isLoading = false; // Désactive le spinner après la requête (succès ou échec)
        }
      });
    }
    
  }