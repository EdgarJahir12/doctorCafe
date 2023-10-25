import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    //Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;       
}

}
