import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hoja } from './hoja'; // Asegúrate de importar el modelo Hoja si lo tienes

@Injectable({
  providedIn: 'root'
})
export class HojasService {
  URL = "https://api-doctorcafe-production.up.railway.app/api/hojas";

  constructor(private _http: HttpClient) { }

  getHojas(): Observable<Hoja[]> {
    return this._http.get<Hoja[]>(this.URL);
  }

  getHojasByCafeto(idCafeto: number): Observable<Hoja[]> {
    const url = `${this.URL}/cafeto/${idCafeto}`;
    return this._http.get<Hoja[]>(url);
  }
  // Puedes agregar otros métodos según tus necesidades, por ejemplo, para obtener hojas por finca.
}
