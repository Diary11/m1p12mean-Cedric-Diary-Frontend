import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriqueWidgetComponent } from './components/historique-widget';
import { FormulaireWidgetComponent } from './components/formulaire-reparation';

@Component({
  selector: 'app-reparation',
  standalone: true,
  imports: [CommonModule, FormulaireWidgetComponent, HistoriqueWidgetComponent],
  template: `
    <div class="grid grid-cols-12 gap-8">
      <!-- Historique -->
      <div *ngIf="!showForm" class="col-span-12">
        <app-historique-widget (onNouvelleReparation)="afficherFormulaire()" />
      </div>

      <!-- Formulaire -->
      <div *ngIf="showForm" class="col-span-12">
        <app-formulaire-widget (onFermer)="fermerFormulaire()" />
      </div>
    </div>
  `
})
export class ReparationComponent {
  showForm = false;

  afficherFormulaire() {
    this.showForm = true;
  }

  fermerFormulaire() {
    this.showForm = false;
  }
}
