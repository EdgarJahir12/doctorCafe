import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();

  private idUsuarioSubject = new BehaviorSubject<number | null>(null);
  idUsuario$ = this.idUsuarioSubject.asObservable();

  setUserData(data: any) {
    this.userDataSubject.next(data);
  }

  setIdUsuario(idUsuario: string | null) {
    const idNumerico = idUsuario ? parseInt(idUsuario, 10) : null;
    this.idUsuarioSubject.next(idNumerico);
  }

  constructor() { }
}

