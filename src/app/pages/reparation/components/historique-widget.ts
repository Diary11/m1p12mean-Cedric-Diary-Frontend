import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

interface Reparation {
  _id: string;
  date: string;
  matricule: string;
  status: string;
  total: number;
}

@Component({
  selector: 'app-historique-widget',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card p-4 bg-white rounded shadow-sm">
      <h3 class="text-xl font-semibold mb-4">Mes Réparations</h3>
      <button (click)="onNouvelleReparation.emit()" class="mb-4 px-4 py-2 bg-blue-600 text-white rounded"> Nouvelle réparation</button>

      <table class="w-full border border-collapse text-sm">
        <thead>
          <tr class="bg-gray-200">
            <th class="border p-2">Date</th>
            <th class="border p-2">Matricule</th>
            <th class="border p-2">Statut</th>
            <th class="border p-2">Montant</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let r of paginatedReparations">
            <td class="border p-2">{{ r.date | date:'short' }}</td>
            <td class="border p-2">{{ r.matricule }}</td>
            <td class="border p-2">{{ r.status }}</td>
            <td class="border p-2">{{ r.total || 0 }} Ar</td>
          </tr>
        </tbody>
      </table>

      <div class="mt-4 flex justify-center items-center gap-2">
        <button (click)="previousPage()" [disabled]="currentPage === 1" class="px-3 py-1 bg-gray-300 rounded">«</button>
        <span>Page {{ currentPage }} / {{ totalPages }}</span>
        <button (click)="nextPage()" [disabled]="currentPage === totalPages" class="px-3 py-1 bg-gray-300 rounded">»</button>
      </div>
    </div>
  `
})
export class HistoriqueWidgetComponent implements OnInit {
  private apiUrl = `${environment.apiUrl}/api/reparations`;

  @Output() onNouvelleReparation = new EventEmitter<void>();
  reparations: Reparation[] = [];

  currentPage = 1;
  pageSize = 10;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<Reparation[]>(`${this.apiUrl}/my-reparations`, {
      headers: new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem('token')}` })
    }).subscribe({
      next: (data) => this.reparations = data
    });
  }

  get paginatedReparations(): Reparation[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.reparations.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.reparations.length / this.pageSize);
  }

  previousPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  naviguerVersFormulaire() {
    const idClient = localStorage.getItem('userId');
    this.router.navigate(['/reparation/creer'], {
      queryParams: { client: idClient }
    });
  }
}