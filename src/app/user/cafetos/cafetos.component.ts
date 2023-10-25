import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CafetosService } from 'src/app/services/cafetos.service';
import { FincaSelectionService } from 'src/app/services/finca-selection.service';


@Component({
  selector: 'app-cafetos',
  templateUrl: './cafetos.component.html',
  styleUrls: ['./cafetos.component.scss']
})
export class CafetosComponent implements OnInit {
  especies: string[] = ['robusta', 'arabiga', 'liberica', 'Todas'];
  cafetosFiltrados: any[] = []; // Cambiado a tipo any por ahora
  selectedOption: string = 'Todas';
  selectedFincaId: number = 0;
  selectedCafetoId: number | null = null;


  constructor(
    private cafetosService: CafetosService,
    private fincaSelectionService: FincaSelectionService,
    private router: Router // Agrega esta línea

  ) {}

  ngOnInit(): void {
    this.getCafetos();
    this.selectedOption = 'Todas';
  
    this.fincaSelectionService.selectedFinca.subscribe(idFinca => {
      if (idFinca !== undefined) {
        this.selectedFincaId = idFinca;
        this.aplicarFiltros();
      }
    });
  }

  getCafetos(): void {
    this.cafetosService.getCafetos().subscribe(
      (data) => {
        this.cafetosFiltrados = data;
        this.aplicarFiltros(); // Aplicar los filtros iniciales
      },
      (error) => {
        console.error('Error al obtener cafetos:', error);
      }
    );
  }

  aplicarFiltros(): void {
    if (this.selectedOption === 'Todas') {
      this.filtrarPorFinca();
    } else {
      this.filtrarPorFinca();
      this.cafetosFiltrados = this.cafetosFiltrados.filter(cafe => cafe.especieCafe === this.selectedOption);
    }
  }

  filtrarPorFinca(): void {
    if (this.selectedFincaId !== 0) {
      this.cafetosFiltrados = this.cafetosFiltrados.filter(cafe => cafe.idFinca === this.selectedFincaId);
    }
  }

  handleChipSelection(option: string) {
    this.selectedOption = option;
    this.aplicarFiltros();
  }

  redirigirAHojas(idCafeto: number) {
    // Utiliza el ID del cafeto para navegar a la página de hojas
    this.router.navigate(['/panel/user/hojas', idCafeto]);
  }
}
