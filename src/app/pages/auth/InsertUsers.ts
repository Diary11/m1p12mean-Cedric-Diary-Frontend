import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api'; 
import { ToastModule } from 'primeng/toast'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Password } from 'primeng/password';
import { InsertUsersService } from './insertUsers.service';
import { jwtDecode } from 'jwt-decode';
import { PrimeIcons } from 'primeng/api';
import { ActivatedRoute,Router } from '@angular/router';



interface DecodedToken {
  role?: string;
  // autres champs du token si nécessaire
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Ajoutez ce module
    ButtonModule, 
    MenuModule, 
    RouterModule, 
    ToastModule
  ], // ToastModule ajouté
  templateUrl: './insertUsers.html',
  styleUrls: ['./insertUsers.component.css'] ,
  providers: [MessageService] // Provider ajouté
})

export class InsertUsers {
  token: string | null = null;
  users: any[] = [];
  mecaniciens: any[] = [];
  newUsers = { 
    username: '', 
    password: '', 
    email: '',
    salaire:''
  };
  mode: 'client' | 'mecanicien' = 'client';
  userRole: string | null = null;
  totalSalaires = 0;
  nombreMecaniciens = 0;


  constructor(
    private insertUsersService: InsertUsersService,
    private messageService: MessageService,
    private route: ActivatedRoute, // Injection ajoutée
    private router: Router
  ) {}

  /*ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.serviceService.getService().subscribe({
      next: (data) => this.services = data,
      error: (err) => console.error('Erreur de chargement', err)
    });
  }*/

    ngOnInit(): void {
    this.mode = this.route.snapshot.data['mode'] || 'client';
    this.checkTokenAndRole();
    this.loadMecaniciens();
    this.loadSommeSalaires();
  }

  loadSommeSalaires(): void {
    this.insertUsersService.getSommeSalaires().subscribe({
      next: (data) => {
        this.totalSalaires = data.totalSalaires;
        // Optionnel: charger aussi le nombre de mécaniciens
        this.loadNombreMecaniciens();
      },
      error: (err) => console.error('Erreur:', err)
    });
  }

  loadNombreMecaniciens(): void {
    this.insertUsersService.getMecaniciens().subscribe({
      next: (mecanos) => this.nombreMecaniciens = mecanos.length
    });
  }

  loadMecaniciens(): void {
    this.insertUsersService.getMecaniciens().subscribe({
      next: (data) => this.mecaniciens = data,
      error: (err) => console.error('Erreur de chargement', err)
    });
  }
  
  private checkTokenAndRole(): void {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        this.userRole = decoded.role || null; // 'admin', 'client', ou null
      } catch (e) {
        console.error('Token invalide', e);
        this.userRole = null;
      }
    }
  }

  submitForm(): void {

    if (!this.newUsers.username || !this.newUsers.password || !this.newUsers.email) {
      this.showMessage('warn', 'Attention', 'Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (this.mode === 'mecanicien' && !this.newUsers.salaire) {
      this.showMessage('warn', 'Attention', 'Veuillez saisir le salaire du mécanicien');
      return;
    }
    const serviceCall = this.mode === 'client' 
      ? this.insertUsersService.addUsers(this.newUsers)
      : this.insertUsersService.addMecano(this.newUsers);

      serviceCall.subscribe({
        next: (newMecanicien) => {
          this.newUsers = { username: '', password: '', email: '',salaire:'' };
          this.showMessage('success', 'Succès', 'Inscription réussie');
          
          if (this.userRole === 'admin' && this.mode === 'mecanicien') {
            this.mecaniciens = [...this.mecaniciens, newMecanicien];
            this.nombreMecaniciens = this.mecaniciens.length;
            this.totalSalaires = this.mecaniciens.reduce((sum, m) => sum + (+m.salaire || 0), 0);
          
          }

          
          // Redirection après 2 secondes (le temps de voir le message)
          setTimeout(() => {
            if (this.mode === 'client') {
              this.router.navigate(['/login-client']); // Redirection vers la route login-client
            } else {
              // Redirection différente pour les mécaniciens si nécessaire
              this.router.navigate(['/ajoutMecano']);
            }
          }, 2000);
        },
        error: (err) => {
          console.error('Erreur', err);
          this.showMessage('error', 'Erreur', "Échec de l'inscription il y a déjà un utilisateur a ce nom");
        }
      });
  }
  private showMessage(severity: string, summary: string, detail: string): void {
    this.messageService.add({ severity, summary, detail, life: 3000 });
  }

   
 /* supprimerService(id: string): void {
    if (confirm('Voulez-vous vraiment supprimer ce service ?')) {
      this.serviceService.deleteService(id).subscribe({
        next: () => {
          this.loadServices();
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Service supprimé',
            life: 3000
          });
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: 'Échec de la suppression',
            life: 3000
          });
        }
      });
    }
  }

  editService(service: any): void {
    // Implémentez la logique d'édition
    this.newUsers = { ...service };
  }*/
}
