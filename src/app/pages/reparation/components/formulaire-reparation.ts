import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

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
  imports: [CommonModule, DragDropModule, FormsModule, ToastModule],
  providers: [MessageService],
  template: `
    <p-toast></p-toast>
    <div class="card p-6 bg-white rounded shadow-sm">
      <h3 class="text-xl font-semibold mb-4">Nouvelle réparation</h3>

      <div class="mb-4">
        <label for="matricule" class="block mb-1 font-medium">Matricule</label>
        <input id="matricule" [(ngModel)]="matricule" name="matricule" class="w-full p-2 border rounded" placeholder="Entrer le matricule" />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <!-- Dropzone -->
        <div
          cdkDropList
          id="repairList"
          [cdkDropListData]="selectedServices"
          [cdkDropListConnectedTo]="['serviceList']"
          (cdkDropListDropped)="drop($event)"
          class="p-4 bg-gray-100 rounded min-h-[150px]">

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

          <div class="mt-4 p-2 bg-blue-100 rounded text-sm">
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

      <button (click)="envoyer()" class="mt-6 px-4 py-2 bg-blue-600 text-white rounded">Envoyer</button>
    </div>
  `
})
export class FormulaireWidgetComponent implements OnInit {
  private apiUrl = `${environment.apiUrl}/api/services`;

  allServices: Service[] = [];
  selectedServices: Service[] = [];
  visibleProducts: Service[] = [];
  searchText = '';
  matricule = '';
  clientId = '';

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) {}

  ngOnInit() {
    this.http.get<Service[]>(`${this.apiUrl}`).subscribe({
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
    if (!this.matricule || this.selectedServices.length === 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'Champs requis',
        detail: 'Veuillez remplir le matricule et sélectionner des services.',
        life: 4000
      });
      return;
    }

    const payload = {
      matricule: this.matricule,
      services: this.selectedServices,
      total: this.getTotalPrix(),
      duration: this.getTotalDuree()
    };

    localStorage.setItem('reparationPayload', JSON.stringify(payload));
    this.router.navigate(['/reparation/calendrier']);
  }

  getTotalPrix(): number {
    return this.selectedServices.reduce((sum, s) => sum + (s.prix || 0), 0);
  }

  getTotalDuree(): number {
    return this.selectedServices.reduce((sum, s) => sum + (s.duree || 0), 0);
  }
}