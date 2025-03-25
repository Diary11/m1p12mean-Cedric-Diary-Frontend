import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { MessageService } from 'primeng/api'; 
import { ToastModule } from 'primeng/toast'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';


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
  templateUrl: './insertService.html',
  providers: [MessageService] // Provider ajouté
})
export class InsertServiceWidget implements OnInit {
  services: any[] = [];
  newService = { 
    nom: '', 
    details: '', 
    prix: 0, 
    duree: 0, 
    commission: 0
  };

  constructor(
    private serviceService: ServiceService,
    private messageService: MessageService // Injection ajoutée
  ) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.serviceService.getService().subscribe({
      next: (data) => this.services = data,
      error: (err) => console.error('Erreur de chargement', err)
    });
  }

  insertService(): void {
    if (this.newService.nom && 
        this.newService.details && 
        this.newService.prix > 0 && 
        this.newService.duree > 0 && 
        this.newService.commission >= 0) {
      
      this.serviceService.addService(this.newService).subscribe({
        next: () => {
          this.loadServices();
          this.newService = { nom: '', details: '', prix: 0, duree: 0, commission: 0 };
          this.SuccessMessage();
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout du service', err);
          this.ErrorMessage();
        }
      });
    } else {
      this.WarningMessage();
    }
  }

  private SuccessMessage(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Succès',
      detail: 'Service ajouté avec succès',
      life: 3000
    });
  }

  private ErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Erreur',
      detail: 'Échec de l\'ajout du service',
      life: 3000
    });
  }

  private WarningMessage(): void {
    this.messageService.add({
      severity: 'warn',
      summary: 'Attention',
      detail: 'Veuillez remplir tous les champs correctement',
      life: 3000
    });
  }

  supprimerService(id: string): void {
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
    this.newService = { ...service };
  }
}
