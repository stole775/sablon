import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SmartPhone } from './SmartPhone';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  private apiUrl = 'http://it255.glitch.me/smartphones';

  constructor(private http: HttpClient) { }

  getAll(): Observable<SmartPhone[]> {
    return this.http.get<SmartPhone[]>(this.apiUrl);
  }

  getOneByID(id: number): Observable<SmartPhone> {
    return this.http.get<SmartPhone>(`${this.apiUrl}/${id}`);
  }

  create(smartphone: SmartPhone): Observable<SmartPhone> {
    return this.http.post<SmartPhone>(this.apiUrl, smartphone);
  }

  update(id: number, smartphone: SmartPhone): Observable<SmartPhone> {
    return this.http.put<SmartPhone>(`${this.apiUrl}/${id}`, smartphone);
  }
  updateSmartphone(smartphone: SmartPhone): Observable<SmartPhone> {
    const url = `${this.apiUrl}/${smartphone.id}`;
    return this.http.put<SmartPhone>(url, smartphone);
  }
  

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
 
}
