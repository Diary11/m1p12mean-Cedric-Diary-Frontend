import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-calendrier',
  standalone: true,
  imports: [CommonModule, jqxSchedulerModule],
  template: `
    <div class="p-6">
      <h2 class="text-xl font-bold mb-4">Choisissez une date de réparation</h2>

      <jqxScheduler
        [theme]="'fluent'"
        [date]="date"
        [width]="getWidth()"
        [height]="600"
        [source]="dataAdapter"
        [appointmentDataFields]="appointmentDataFields"
        [resources]="resources"
        [views]="views"
        [view]="'weekView'"
        [editDialog]="false"
        [localization]="frLocalization"
        (onCellClick)="onCellClick($event)">
      </jqxScheduler>

      <div *ngIf="selectedStartDate" class="mt-4 text-green-700 text-sm">
        Créneau choisi :
        <strong>{{ selectedStartDate | date:'shortTime' }}</strong> →
        <strong>{{ selectedEndDate | date:'shortTime' }}</strong>
      </div>

      <button (click)="validerDate()" class="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
        Valider la date choisie
      </button>
    </div>
  `
})
export class CalendrierComponent {
  private apiUrl = `${environment.apiUrl}/api/reparations`;
  
  date: any = new jqx.date(new Date());
  matricule = '';
  services: any[] = [];
  total = 0;
  duration = 0;

  selectedStartDate: Date | null = null;
  selectedEndDate: Date | null = null;

  constructor(private router: Router, private http: HttpClient) {
    const data = localStorage.getItem('reparationPayload');
    if (data) {
      const payload = JSON.parse(data);
      this.matricule = payload.matricule;
      this.services = payload.services;
      this.total = payload.total;
      this.duration = payload.duration;
    } else {
      alert("Aucune donnée trouvée. Retour au formulaire.");
      this.router.navigate(['/reparation/formulaire']);
    }
  }

onCellClick(event: any): void {
  const clickedDate: Date = event.args.date.toDate();
  const endDate: Date = new Date(clickedDate.getTime() + this.duration * 60 * 60 * 1000);

  const now = new Date();
  if (clickedDate < now) {
    alert("Impossible de sélectionner une date dans le passé.");
    return;
  }

  const isSameDay =
    clickedDate.getDate() === endDate.getDate() &&
    clickedDate.getMonth() === endDate.getMonth() &&
    clickedDate.getFullYear() === endDate.getFullYear();

  if (!isSameDay || clickedDate.getHours() < 8 || endDate.getHours() > 17) {
    alert("Sélection invalide. Les créneaux doivent être entre 8h et 17h.");
    return;
  }

  this.selectedStartDate = clickedDate;
  this.selectedEndDate = endDate;

  this.source.localData = this.source.localData.filter((item: any) => !item.fake);

  this.source.localData.push({
    id: "selected-slot",
    subject: "Créneau sélectionné",
    calendar: "selection",
    start: clickedDate,
    end: endDate,
    fake: true
  });

  this.dataAdapter = new jqx.dataAdapter(this.source);

  console.log("✅ Créneau affiché :", clickedDate, "→", endDate);
}


  validerDate() {
    if (!this.selectedStartDate || !this.selectedEndDate) {
      alert("Cliquez sur une cellule du calendrier.");
      return;
    }

    const payload = {
      matricule: this.matricule,
      services: this.services.map(s => s._id),
      total: this.total,
      duration: this.duration,
      startDate: this.selectedStartDate,
      endDate: this.selectedEndDate
    };


    this.http.post(`${this.apiUrl}/create`, payload, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })
    }).subscribe({
      next: () => {
        localStorage.removeItem('reparationPayload');
        alert('✅ Réparation créée avec succès !');
        this.router.navigate(['/reparation']);
      },
      error: (err) => {
        console.error(" Erreur :", err);
        alert("Erreur lors de l'enregistrement.");
      }
    });
  }

  getWidth(): any {
    return document.body.offsetWidth < 850 ? '90%' : 850;
  }

  generateAppointments(): any[] {
    return [];
  }

  source: any = {
    dataType: 'array',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'subject', type: 'string' },
      { name: 'calendar', type: 'string' },
      { name: 'start', type: 'date' },
      { name: 'end', type: 'date' }
    ],
    id: 'id',
    localData: this.generateAppointments()
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  appointmentDataFields: any = {
    from: 'start',
    to: 'end',
    id: 'id',
    description: 'description',
    location: 'location',
    subject: 'subject',
    resourceId: 'calendar'
  };

  resources: any = {
    colorScheme: 'scheme05',
    dataField: 'calendar',
    source: new jqx.dataAdapter({
      dataType: 'array',
      dataFields: [{ name: 'calendar', type: 'string' }],
      localData: [
        { calendar: "atelier" },
        { calendar: "selection" } // 🟢 Créneau sélectionné
      ]
    })
  };

  views: any[] = [
    {
      type: 'dayView',
      timeRuler: {
        scaleStartHour: 8,
        scaleEndHour: 17
      }
    },
    {
      type: 'weekView',
      timeRuler: {
        scaleStartHour: 8,
        scaleEndHour: 17
      }
    },
    'monthView'
  ];

  frLocalization: any = {
    firstDay: 1,
    days: {
      names: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
      namesAbbr: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
      namesShort: ["D", "L", "M", "M", "J", "V", "S"]
    },
    months: {
      names: [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
      ],
      namesAbbr: [
        "Jan", "Fév", "Mar", "Avr", "Mai", "Juin",
        "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"
      ]
    },
    todayString: "Aujourd'hui",
    clearString: "Effacer"
  };
}
