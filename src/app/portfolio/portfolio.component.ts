import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
    //Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;       
}

}
