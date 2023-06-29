import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  isCafetosExpanded: boolean = false; // Variable para controlar la expansión de "Cafetos"

  constructor(private observer: BreakpointObserver, private cd: ChangeDetectorRef) {}

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
}
