import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserRoutingModule } from './user-routing.module';
import { RobustaComponent } from './robusta/robusta.component';
import { ArabicaComponent } from './arabica/arabica.component';
import {MatCardModule} from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { VerArabicaComponent } from './ver-arabica/ver-arabica.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { HttpClientModule } from '@angular/common/http';
import { FincasComponent } from './fincas/fincas.component';
import { CafetosComponent } from './cafetos/cafetos.component';
import { MatChipsModule } from '@angular/material/chips';
import { HojasComponent } from './hojas/hojas.component';






@NgModule({
  declarations: [
    UserCreateComponent,
    UserListComponent,
    UserDetailsComponent,
    UserEditComponent,
    RobustaComponent,
    ArabicaComponent,
    VerArabicaComponent,
    UserIndexComponent,
    FincasComponent,
    CafetosComponent,
    HojasComponent,
    
    
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    UserRoutingModule,
    MatCardModule,
    NgChartsModule,
    HttpClientModule,
    

  ]
})
export class UserModule { }
