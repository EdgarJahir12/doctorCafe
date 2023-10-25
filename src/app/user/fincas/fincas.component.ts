import { Component, OnInit } from '@angular/core';
import { FincaService } from 'src/app/services/finca.service';
import { Finca } from 'src/app/services/finca';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FincaSelectionService } from 'src/app/services/finca-selection.service';

@Component({
  selector: 'app-fincas',
  templateUrl: './fincas.component.html',
  styleUrls: ['./fincas.component.scss']
})
export class FincasComponent implements OnInit {

  fincas: Finca[] = [];
  idUsuario: string | null = null; // Cambiado a string | null

  constructor(
    public _fincaService: FincaService,
    private route: ActivatedRoute,
    private router: Router,
    private fincaSelectionService: FincaSelectionService

  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idUsuario = params.get('idUsuario');
      if (idUsuario !== null) {
        this.idUsuario = idUsuario;
        console.log('Valor de idUsuario:', this.idUsuario);
  
        // Llamar al servicio para obtener las fincas por usuario
        this._fincaService.getFincasByUsuario(+this.idUsuario).subscribe(
          fincas => {
            this.fincas = fincas;
            console.log('Fincas obtenidas:', this.fincas);
          },
          error => {
            console.error('Error al obtener fincas:', error);
          }
        );
      }
    });
  }
  

  redirigirACafetos(idFinca: number) {
    this.fincaSelectionService.selectFinca(idFinca);
    this.router.navigate(['/panel/user/cafetos', idFinca]); // Pasa el idFinca como parámetro
  }
  
  
}
