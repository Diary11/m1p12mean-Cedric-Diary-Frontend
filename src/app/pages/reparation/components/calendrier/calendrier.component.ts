import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { jqxSchedulerComponent, jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';

@Component({
  selector: 'app-calendrier',
  standalone: true,
  imports: [jqxSchedulerModule],
  template: `
    <div class="p-6">
      <h2 class="text-xl font-bold mb-4">Choisissez une date de réparation</h2>
      <jqxScheduler
        #schedulerReference
        [theme]="'fluent'"
        [date]="date"
        [width]="getWidth()"
        [height]="600"
        [source]="dataAdapter"
        [showLegend]="true"
        [view]="'weekView'"
        [appointmentDataFields]="appointmentDataFields"
        [resources]="resources"
        [views]="views"
        [editDialog]="true"
        [localization]="frLocalization">
      </jqxScheduler>

      <button (click)="validerDate()" class="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
        Valider la date choisie
      </button>
    </div>
  `
})
export class CalendrierComponent implements AfterViewInit {
  @ViewChild('schedulerReference') scheduler!: jqxSchedulerComponent;

  date: any = new jqx.date(new Date());
  matricule = '';
  services: any[] = [];
  total = 0;
  duration = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;
    if (state) {
      this.matricule = state['matricule'];
      this.services = state['services'];
      this.total = state['total'];
      this.duration = state['duration'];
    }
  }

  ngAfterViewInit(): void {
    if (this.scheduler) {
      this.scheduler.ensureAppointmentVisible('id1');
    }
  }

  validerDate() {
    const appointments = this.scheduler.getAppointments();
    if (!appointments || appointments.length === 0) {
      alert("Sélectionnez un créneau dans le calendrier.");
      return;
    }

    const slot: any = appointments[appointments.length - 1];

    const payload = {
      matricule: this.matricule,
      services: this.services.map(s => s._id),
      total: this.total,
      duration: this.duration,
      startDate: slot.from,
      endDate: slot.to
    };

    console.log("🟢 Données prêtes à envoyer :", payload);
    // Ici tu peux faire l'envoi HTTP ou rediriger
  }

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }
    return 850;
  }

  generateAppointments(): any[] {
    return [
      {
        id: "id1",
        description: "George apporte le projecteur pour la présentation.",
        location: "",
        subject: "Réunion projet trimestriel",
        calendar: "atelier",
        start: new Date(2025, 10, 23, 9, 0, 0),
        end: new Date(2025, 10, 23, 16, 0, 0)
      },
      {
        id: "id2",
        subject: "Réunion IT",
        calendar: "atelier",
        start: new Date(2025, 10, 24, 10, 0, 0),
        end: new Date(2025, 10, 24, 15, 0, 0)
      },
      {
        id: "id3",
        subject: "Formation Réseaux sociaux",
        calendar: "atelier",
        start: new Date(2025, 10, 27, 11, 0, 0),
        end: new Date(2025, 10, 27, 13, 0, 0)
      }
    ];
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
    source: new jqx.dataAdapter(this.source)
  };

  views: any[] = ['dayView', 'weekView', 'monthView'];

  // ✅ Localisation en français
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
