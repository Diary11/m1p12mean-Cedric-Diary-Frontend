import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { AppFooter } from '../../layout/component/app.footer'; 
import {
  faUser, 
  faTools, 
  faCog,
  faCalendarAlt,
  faHistory,
  faCreditCard,
  faUsers,
  faChartLine,
  faWrench
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    DividerModule,
    RippleModule,
    FontAwesomeModule,
    AppFooter,
    AppFloatingConfigurator
    ],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class Accueil {
  // Icônes FontAwesome
  faUser = faUser;
  faTools = faTools;
  faCog = faCog;
  faCalendarAlt = faCalendarAlt;
  faHistory = faHistory;
  faCreditCard = faCreditCard;
  faUsers = faUsers;
  faChartLine = faChartLine;
  faWrench = faWrench;
}