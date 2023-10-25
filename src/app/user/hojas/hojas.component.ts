import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HojasService } from 'src/app/services/hojas.service';
import { Hoja } from 'src/app/services/hoja'; // Asegúrate de importar el modelo correcto

@Component({
  selector: 'app-hojas',
  templateUrl: './hojas.component.html',
  styleUrls: ['./hojas.component.scss']
})
export class HojasComponent implements OnInit {
  hojas: Hoja[] = [];

  constructor(private hojasService: HojasService,private route: ActivatedRoute,    ) { }

  ngOnInit(): void {
    // Obtener el ID del cafeto desde los parámetros de la ruta
    this.route.paramMap.subscribe(params => {
      const idCafeto = params.get('idCafeto');
      if (idCafeto !== null) {
        // Llamar al servicio para obtener las hojas por cafeto
        this.hojasService.getHojasByCafeto(+idCafeto).subscribe(
          hojas => {
            this.hojas = hojas;
            console.log('Hojas obtenidas:', this.hojas); // Agrega este console.log
          },
          error => {
            console.error('Error al obtener hojas:', error);
          }
        );
      }
    });
  }  
  
  
  
  
  
}
