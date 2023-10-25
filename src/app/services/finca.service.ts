import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Finca } from './finca';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FincaService {

  URL = "https://api-doctorcafe-production.up.railway.app/api/fincas";

  constructor(private _http: HttpClient) { }

  getFincas(): Observable<Finca[]>{
    return this._http.get<Finca[]>(this.URL);
  }

  getFincasByUsuario(idUsuario: number): Observable<Finca[]> {
    const url = `${this.URL}/usuario/${idUsuario}`;
    return this._http.get<Finca[]>(url);
  }
  

}
