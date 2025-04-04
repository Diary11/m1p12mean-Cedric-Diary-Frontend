import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { delay } from 'rxjs/operators';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { AuthService } from './auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

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
        ToastModule
    ],
    providers: [MessageService],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'] 
})
export class Login implements OnInit {
    username: string = '';
    password: string = '';
    checked: boolean = false;
    errorMessage: string = '';
    isLoading: boolean = false;
    role: string = '';
    welcomeMessage: string = 'Bienvenue';
    specificField: string = '';

    constructor(
        private authService: AuthService, 
        private router: Router,private messageService: MessageService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
          this.role = params['role'] || '';
          this.changeRole();
          this.setContetenuFormulaire();  
      });
  }
  private setContetenuFormulaire() {
    switch(this.role) {
        case 'client':
            this.username = 'Didy Paty';
            this.password = 'didy';
            break;
        case 'mecano':
            this.username = 'Cedric Kasy';
            this.password = 'cedric';
            break;
        case 'admin':
            this.username = 'Rakoto Jean';
            this.password = 'jean';
            break;
        default:
            this.username = '';
            this.password = '';
    }
}

    private changeRole() {
        switch(this.role) {
            case 'client':
                this.welcomeMessage = 'Bienvenue Client';
                this.specificField = 'Nom';
                break;
            case 'mecano':
                this.welcomeMessage = 'Bienvenue Mécanicien';
                this.specificField = 'Matricule';
                break;
            case 'admin':
                this.welcomeMessage = 'Bienvenue Administrateur';
                this.specificField = 'Code Admin';
                break;
                default:
                  // Redirection vers l'accueil si aucun rôle n'est spécifié
                  this.router.navigate(['/']);
                  return; // Important pour arrêter l'exécution
          }
    }

    onSignIn() {
        this.isLoading = true;
        const credentials = {
            username: this.username,
            password: this.password,
            role: this.role // Envoie le rôle au backend
        };

        
        this.authService.login(this.username, this.password).pipe(delay(2000)).subscribe({
            next: (res: { token: string; role: string; }) => {
                localStorage.setItem('token', res.token);
                localStorage.setItem('role', res.role);
                this.redirectBasedOnRole(res.role);
            },
            error: () => {
          //       this.errorMessage = 'Identifiants invalides';
                this.isLoading = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Identifiants invalides',
            detail: 'Nom ou mot de passe incorrect',
            life: 4000
          });
            },
            complete: () => {
                this.isLoading = false;
            }
        });
    }

    private redirectBasedOnRole(role: string) {
        switch(role) {
            case 'client':
                this.router.navigate(['/dashboard']);
                break;
            case 'mecano':
                this.router.navigate(['/reparation']);
                break;
            case 'admin':
                this.router.navigate(['/admin']);
                break;
            default:
                this.router.navigate(['/dashboard']);
        }
    }
}