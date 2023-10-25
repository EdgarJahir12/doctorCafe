import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  idUsuario: number | null = null;
  nombre: string | undefined;
  correoElectronico: string | undefined;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  isCafetosExpanded: boolean = false;

  constructor(
    private observer: BreakpointObserver,
    private cd: ChangeDetectorRef,
    private router: Router,
    private dataSharingService: DataSharingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataSharingService.userData$.subscribe(userData => {
      if (userData && userData.idUsuario !== null) {
        this.idUsuario = userData.idUsuario;
        this.nombre = userData.nombre;
        this.correoElectronico = userData.correoElectronico;
        if (this.idUsuario !== null) {
          this.router.navigate(['/panel/user/user', this.idUsuario]);
          this.dataSharingService.setIdUsuario(this.idUsuario.toString());
        }
      }
    });
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((resp: any) => {
      if (resp.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.cd.detectChanges();
  }

  toggleCafetos() {
    this.isCafetosExpanded = !this.isCafetosExpanded;
  }

  navigateToInicio() {
    if (this.idUsuario !== null) {
      // Usa el servicio para enviar el ID del usuario
      this.dataSharingService.setIdUsuario(this.idUsuario.toString());
      this.router.navigate(['/panel/user/user', this.idUsuario]);
    }
  }

}
