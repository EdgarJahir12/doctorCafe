import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FincaSelectionService {
  private selectedFincaSubject: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);

  get selectedFinca() {
    return this.selectedFincaSubject.asObservable();
  }

  selectFinca(idFinca: number) {
    this.selectedFincaSubject.next(idFinca);
  }
}
