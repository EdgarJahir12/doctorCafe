import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CafetosService {

  private apiBaseUrl = 'https://api-doctorcafe-production.up.railway.app/api';

  constructor(private http: HttpClient) { }

  getCafetos(): Observable<any[]> { 
    const url = `${this.apiBaseUrl}/cafetos`;
    console.log('URL para obtener cafetos:', url);

    return this.http.get<any[]>(url).pipe(
      tap(data => console.log('Datos obtenidos de cafetos:', data)),
      catchError(error => {
        console.error('Error al obtener cafetos:', error);
        throw error;
      })
    );
  }
}
