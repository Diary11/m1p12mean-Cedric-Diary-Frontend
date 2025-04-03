import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = `${environment.apiUrl}/services`;


  constructor(private http: HttpClient) {}

  getService(): Observable<any> {
  return this.http.get(`${this.apiUrl}/listeService`);
  }

  addService(service: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/insertService`, service);
  }

  updateClients(id: string, client: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, client);
  }

  deleteService(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
  }
 
 
}
