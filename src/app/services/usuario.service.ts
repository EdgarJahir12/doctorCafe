import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL = "https://api-doctorcafe-production.up.railway.app/api/usuarios";
 

  constructor(private _http: HttpClient) { }

  getUsuario(idUsuario: number): Observable<any> {
    const url = `${this.URL}/${idUsuario}`;
    return this._http.get(url);
  }
}

