import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
  <div style="width: 800px; height: 500px;" class="grafica mt-4">
    <canvas baseChart [datasets]="chartData" [labels]="chartLabels" [options]="chartOptions" [type]="'bar'"></canvas>
  </div>
`,
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  
  chartData: any[] = [
    { data: [20, 30, 60], backgroundColor: ['green', 'yellow', 'red']},
  ];
  chartLabels: string[] = ['Plantas saludables', 'Plantas con riesgo medio', 'Plantas con riesgo alto'];
  chartOptions: any = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Niveles de infeccion en la finca',
      },
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          fontColor: 'black',
        },
      },
    },
  };

}
