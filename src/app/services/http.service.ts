import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlUsuarios = 'https://api-doctorcafe-production.up.railway.app/api/usuarios'
  urlFincas = 'https://api-doctorcafe-production.up.railway.app/api/fincas'


  constructor(public http: HttpClient) { }

  loadUsers() {
    return this.http
    .get(this.urlUsuarios).toPromise()
  }

  loadFincas() {
    return this.http
    .get(this.urlFincas).toPromise()
  }

  

  loadFincasPorUsuario(idUsuario:any) {
    return this.http
    .get(this.urlFincas+'/usuario/'+idUsuario).toPromise()
  }

  postDataUsuarios(dataAux:any) {
    const data = {
      nombre: dataAux.nombre,
      apellidoPaterno: dataAux.apellidoPaterno,
      apellidoMaterno: dataAux.apellidoMaterno,
      fechaNacimiento: dataAux.fechaNacimiento,
      sexo: dataAux.sexo,
      telefono: null,
      correoElectronico: dataAux.correoElectronico,
      contrasena: dataAux.contrasena
    };

    this.http.post(this.urlUsuarios, data)
    .subscribe(
      (response) => {
        console.log('Respuesta:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  postDataFincas(dataAux:any) {
    const data = {
      nombreFinca: dataAux.nombreFinca,
      ubicacion: dataAux.ubicacion,
      descripcion: dataAux.descripcion,
      idUsuario: dataAux.idUsuario
    };

    this.http.post(this.urlFincas, data)
    .subscribe(
      (response) => {
        console.log('Respuesta:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
