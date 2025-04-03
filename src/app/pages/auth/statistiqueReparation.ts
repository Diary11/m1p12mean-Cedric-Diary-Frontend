import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api'; 
import { ToastModule } from 'primeng/toast'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { PrimeIcons } from 'primeng/api';
import { ActivatedRoute,Router } from '@angular/router';
import { StatistiqueService } from './statistiqueReparation.service';



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
  templateUrl: './statistiqueReparation.html',
  providers: [MessageService] // Provider ajouté
})

// reparation-stats.component.ts
export class StatistiqueReparation {
  stats: any[] = [];
  viewMode: 'day' | 'month' = 'day';

  constructor(private statsService: StatistiqueService) {}

  loadStats(): void {
    this.statsService.getReparationStats(this.viewMode).subscribe({
      next: (data) => this.stats = data,
      error: (err) => console.error('Erreur:', err)
    });
  }

  toggleViewMode(): void {
    this.viewMode = this.viewMode === 'day' ? 'month' : 'day';
    this.loadStats();
  }

  
}
