import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

interface Service {
  _id: string;
  nom: string;
  details: string;
}

@Component({
  selector: 'app-reparation',
  standalone: true,
  imports: [CommonModule, DragDropModule, FormsModule, HttpClientModule],
  template: `
    <div cdkDropListGroup class="grid grid-cols-12 gap-8">
      <!-- Réparation -->
      <div class="col-span-12 xl:col-span-6">
        <div class="card p-4 bg-green-100 rounded min-h-[200px]">
          <div class="font-semibold text-xl mb-4">Réparation</div>

          <div
            cdkDropList
            id="repairList"
            [cdkDropListData]="selectedServices"
            [cdkDropListConnectedTo]="['serviceList']"
            (cdkDropListDropped)="drop($event)"
            class="p-4 bg-green-200 rounded min-h-[150px]">

            <div *ngIf="selectedServices.length === 0" class="text-gray-500">Glissez des services ici</div>

            <div *ngFor="let item of selectedServices; let i = index"
              cdkDrag
              class="p-2 bg-white rounded mb-2 flex justify-between items-center">
              <div>{{ item.nom }}</div>
              <button (click)="remove(i)" class="text-red-500 hover:text-red-700">❌</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Services -->
      <div class="col-span-12 xl:col-span-6">
        <div class="card p-4 bg-gray-100 rounded">
          <div class="font-semibold text-xl mb-4">Services</div>

          <input type="text" [(ngModel)]="searchText" (input)="filter()" placeholder="Rechercher un service"
                 class="mb-4 p-2 w-full rounded border border-gray-300" />

          <div
            cdkDropList
            id="serviceList"
            [cdkDropListData]="visibleProducts"
            [cdkDropListConnectedTo]="['repairList']"
            (cdkDropListDropped)="drop($event)"
            class="p-4 bg-gray-200 rounded">

            <div *ngIf="visibleProducts.length === 0" class="text-gray-500">Aucun service trouvé</div>

            <div *ngFor="let item of visibleProducts"
              cdkDrag
              class="p-2 bg-white rounded mb-2 shadow-sm">
              {{ item.nom }}
            </div>
          </div>

          <div class="flex justify-between mt-4 items-center text-sm">
            <button (click)="prevPage()" [disabled]="currentPage === 1" class="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400">Précédent</button>
            <span>Page {{ currentPage }} / {{ totalPages }}</span>
            <button (click)="nextPage()" [disabled]="currentPage === totalPages" class="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class Reparation implements OnInit {
  allServices: Service[] = [];
  selectedServices: Service[] = [];

  searchText: string = '';
  filteredProducts: Service[] = [];

  currentPage: number = 1;
  pageSize: number = 5;
  visibleProducts: Service[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Service[]>('http://localhost:5000/api/services').subscribe({
      next: (data) => {
        this.allServices = data;
        this.filter();
      },
      error: (err) => {
        console.error('Erreur lors du chargement des services :', err);
      }
    });
  }

  filter() {
    const term = this.searchText.toLowerCase();
    this.filteredProducts = this.allServices.filter(p =>
      p.nom.toLowerCase().includes(term)
    );
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.visibleProducts = this.filteredProducts.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProducts.length / this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  drop(event: CdkDragDrop<Service[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.filter(); // pour mettre à jour visibleProducts
    }
  }

  remove(index: number) {
    const removed = this.selectedServices.splice(index, 1)[0];

    const alreadyIn = this.allServices.some(s => s._id === removed._id);
    if (!alreadyIn) {
      this.allServices.push(removed);
    }

    this.filter();
  }
}
