import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class AuthComponent {
  hide = true;
  hide2= true;

  constructor(private router: Router){}

  login() {
    this.router.navigateByUrl('/panel/user/user')
  }

  salesData: number[] = [120, 150, 180, 90, 200, 300];

  chartOptions: any = {
    responsive: true,
  };

  chartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  
  chartData: any[] = [
    {
      data: this.salesData,
      label: 'Sales',
    },
  ];
}
