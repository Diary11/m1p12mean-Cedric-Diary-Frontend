import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-client-calendrier',
  standalone: true,
  imports: [CommonModule, jqxSchedulerModule],
  template: `
    <div class="p-6">
      <h2 class="text-xl font-bold mb-4">Créneaux déjà réservés</h2>

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
        [localization]="frLocalization">
      </jqxScheduler>
    </div>
  `
})
export class ClientCalendrierComponent implements OnInit {
  private apiUrl = `${environment.apiUrl}/api/timeslots`;
  
  date: any = new jqx.date(new Date());

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTimeSlots();
  }

  fetchTimeSlots(): void {
    this.http.get<any[]>(`${this.apiUrl}`).subscribe((slots) => {
      const appointments = slots.map((slot) => ({
        id: slot._id,
        subject: 'Réservé',
        calendar: 'atelier',
        start: new Date(slot.startDate),
        end: new Date(slot.endDate)
      }));
      this.source.localData = appointments;
      this.dataAdapter = new jqx.dataAdapter(this.source);
    });
  }

  getWidth(): any {
    return document.body.offsetWidth < 850 ? '90%' : 850;
  }

  source: any = {
    dataType: 'array',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'subject', type: 'string' },
      { name: 'calendar', type: 'string' },
      { name: 'start', type: 'date' },
      { name: 'end', type: 'date' }
    ],
    id: 'id',
    localData: []
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  appointmentDataFields: any = {
    from: 'start',
    to: 'end',
    id: 'id',
    subject: 'subject',
    resourceId: 'calendar'
  };

  resources: any = {
    colorScheme: 'scheme05',
    dataField: 'calendar',
    source: new jqx.dataAdapter({
      dataType: 'array',
      dataFields: [{ name: 'calendar', type: 'string' }],
      localData: [{ calendar: 'atelier' }]
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
