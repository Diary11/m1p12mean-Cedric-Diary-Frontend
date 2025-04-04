import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlanningService {
  constructor(private http: HttpClient) {}

  getOccupiedSlots(): Observable<any[]> {
    return this.http.get<any[]>('https://m1p12mean-diary-emiliano-backend.onrender.com/api/reparations/occupied');
  }
}
