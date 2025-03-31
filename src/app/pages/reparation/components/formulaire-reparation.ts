import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

interface Service {
  _id: string;
  nom: string;
  details: string;
  prix: number;
  duree: number;
}


@Component({
  selector: 'app-formulaire-widget',
  standalone: true,
  imports: [CommonModule, DragDropModule, FormsModule],
  template: `
    <div class="card p-4 bg-green-100 rounded min-h-[200px]">
      <h3 class="text-xl font-semibold mb-4">Nouvelle réparation</h3>

      <input [(ngModel)]="matricule" name="matricule" class="..." placeholder="Matricule" />


      <div class="grid grid-cols-2 gap-4">
        <!-- Dropzone -->
        <div
          cdkDropList
          id="repairList"
          [cdkDropListData]="selectedServices"
          [cdkDropListConnectedTo]="['serviceList']"
          (cdkDropListDropped)="drop($event)"
          class="p-4 bg-green-200 rounded min-h-[150px]">
          <div *ngIf="selectedServices.length === 0" class="text-gray-500">Glissez des services ici</div>
          <div *ngFor="let item of selectedServices; let i = index" cdkDrag class="p-2 bg-white rounded mb-2 shadow-sm">
            <div class="flex justify-between items-start gap-2">
              <div>
                <div class="font-semibold">{{ item.nom }}</div>
                <div class="text-sm text-gray-600">Durée : {{ item.duree | number:'1.1-1' }} Heure</div>
                <div class="text-sm text-gray-600">Prix : {{ item.prix | number:'1.2-2' }} Ar</div>
              </div>
              <button (click)="remove(i)" class="text-red-500 hover:text-red-700 text-lg">❌</button>
            </div>
          </div>
          <div class="mt-4 p-2 bg-green-300 rounded text-sm">
            <div class="font-medium">
              Total durée : {{ getTotalDuree() | number:'1.1-1' }} Heure(s)
            </div>
            <div class="font-medium">
              Total prix : {{ getTotalPrix() | number:'1.2-2' }} Ar
            </div>
          </div>


        </div>

        <!-- Liste des services -->
        <div>
          <input type="text" [(ngModel)]="searchText" (input)="filter()" placeholder="Recherche" class="mb-2 w-full p-2 rounded border" />
          <div
            cdkDropList
            id="serviceList"
            [cdkDropListData]="visibleProducts"
            [cdkDropListConnectedTo]="['repairList']"
            (cdkDropListDropped)="drop($event)"
            class="p-4 bg-gray-200 rounded">
            <div *ngFor="let item of visibleProducts" cdkDrag class="p-2 bg-white rounded mb-2 shadow-sm">
              <div class="font-semibold">{{ item.nom }}</div>
              <div class="text-sm text-gray-500">Durée : {{ item.duree | number:'1.1-1' }} Heure</div>
              <div class="text-sm text-gray-500">Prix : {{ item.prix | number:'1.2-2' }} Ar</div>
            </div>

          </div>
        </div>
      </div>

      <button (click)="envoyer()" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Envoyer</button>
    </div>
  `
})
export class FormulaireWidgetComponent implements OnInit {
  allServices: Service[] = [];
  selectedServices: Service[] = [];
  visibleProducts: Service[] = [];
  searchText = '';
  matricule = '';
  clientId = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<Service[]>('http://localhost:5000/api/services').subscribe({
      next: (data) => {
        this.allServices = data;
        this.filter();
      }
    });
  }

  filter() {
    const term = this.searchText.toLowerCase();
    this.visibleProducts = this.allServices.filter(s => s.nom.toLowerCase().includes(term));
  }

  drop(event: CdkDragDrop<Service[]>) {
    const item = event.previousContainer.data[event.previousIndex];
    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    this.allServices = this.allServices.filter(s => !this.selectedServices.find(sel => sel._id === s._id));
    this.filter();
  }

  remove(i: number) {
    const removed = this.selectedServices.splice(i, 1)[0];
    if (!this.allServices.find(s => s._id === removed._id)) this.allServices.push(removed);
    this.filter();
  }

  envoyer() {
    const payload = {
      matricule: this.matricule,
      services: this.selectedServices.map(s => s._id)
    };
  
    this.http.post('http://localhost:5000/api/reparations/create', payload, {
      headers: new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem('token')}` })
    }).subscribe({
      next: () => {
        alert('Réparation créée avec succès');
        this.router.navigate(['/reparation']);
      },
      error: (err) => {
        console.error("Erreur de création :", err);
        alert('Échec de création de la réparation');
      }
    });
  }
  

  getTotalPrix(): number {
    return this.selectedServices.reduce((sum, s) => sum + (s.prix || 0), 0);
  }
  
  getTotalDuree(): number {
    return this.selectedServices.reduce((sum, s) => sum + (s.duree || 0), 0);
  }
  
  
}
