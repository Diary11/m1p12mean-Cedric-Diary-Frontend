import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

 
@Injectable({
  providedIn: 'root'
})
export class InsertUsersService {

  private apiUrl = `${environment.apiUrl}/users`;


  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
  return this.http.get(`${this.apiUrl}/`);
  }

  addUsers(users: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/insertClient`, users);
  }

  addMecano(users: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/insertMecano`, users);
    }

  updateClients(id: string, client: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, client);
  }

  deleteService(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
  }
 
  getMecaniciens(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/mecaniciens`);
  }

  getSommeSalaires(): Observable<{ totalSalaires: number }> {
    return this.http.get<{ totalSalaires: number }>(`${this.apiUrl}/salairesMecano`);
  }
 
}
