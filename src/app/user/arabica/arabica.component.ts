import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arabica',
  templateUrl: './arabica.component.html',
  styleUrls: ['./arabica.component.scss']
})
export class ArabicaComponent {

  constructor(private router: Router){}

  VerArabica() {
    this.router.navigateByUrl('/panel/user/VerDetallesArabica')
  }
}
