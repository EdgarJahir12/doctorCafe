import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Finca } from 'src/app/services/finca';
import { FincaService } from 'src/app/services/finca.service';

// Declara la variable google como una variable global para TypeScript
declare const google: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild("map", { static: true }) mapElement: any;
  map: any;
  title = 'mapas12';
  email = '';
  fincas: Finca[] = [];

  constructor(
    private http: HttpClient,
    public _fincaService: FincaService
  ) {}

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(19.051553612370903, -96.98498981670262),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      fullscreenControl: false
    };
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );

    // Define coordenadas para el primer polígono
    const polygon1Coords = [
      { lat: 19.047402435054952, lng: -96.9737501662011 },
      { lat: 19.04721030360105, lng: -96.9738193611174 },
      { lat: 19.04700158714038, lng: -96.97325892284408 },
      { lat: 19.047216039346853, lng: -96.97320850653101 },
      { lat: 19.047402435054952, lng:  -96.9737501662011 },
      //19.047216039346853, -96.97320850653101
    ];

    // Crear el primer polígono
    const polygon1 = new google.maps.Polygon({
      paths: polygon1Coords,
      strokeColor: "#2e2e28",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#2e2e28",
      fillOpacity: 0.35
    });

    // Asignar el mapa al primer polígono
    polygon1.setMap(this.map);

    // Define coordenadas para el segundo polígono
    const polygon2Coords = [
      { lat: 19.04593118801632, lng: -96.97685296609963 },
      { lat: 19.04540969811361, lng: -96.97711157084991 },
      { lat: 19.045417846405936, lng: -96.97627541549068 },
      { lat: 19.0455400707429, lng: -96.97626679533234 },
      { lat: 19.04593118801632, lng: -96.97685296609963 }
      //19.04540969811361, -96.97711157084991
      //19.0455400707429, -96.97626679533234
    ];

    // Crear el segundo polígono
    const polygon2 = new google.maps.Polygon({
      paths: polygon2Coords,
      strokeColor: "#045c03",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#045c03",
      fillOpacity: 0.35
    });

    // Asignar el mapa al segundo polígono
    polygon2.setMap(this.map);

    const polygon3Coords = [
      { lat: 19.0479723163764, lng: -96.97573665558569 },
      { lat: 19.047805278865088, lng: -96.97630989611011 },
      { lat: 19.04699045937330, lng: -96.97532719805905 },
      { lat: 19.047328609948032, lng: -96.97511600417964},
      { lat: 19.0479723163764, lng: -96.97573665558569},
    
    ];

    // Crear el primer polígono
    const polygon3 = new google.maps.Polygon({
      paths: polygon3Coords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });

    // Asignar el mapa al primer polígono
    polygon3.setMap(this.map);
  }

  chartData: any[] = [
    { data: [20, 10, 30], backgroundColor: ['green', 'yellow', 'red']},
  ];
  chartLabels: string[] = ['Plantas saludables', 'Plantas en observación', 'Plantas enfermas'];
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
        text: 'Niveles de infección en la finca',
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

  getFincas() {
    this._fincaService.getFincas().subscribe((finca) => {
      this.fincas = finca;
    });
  }
}
