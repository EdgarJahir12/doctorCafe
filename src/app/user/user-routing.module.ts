import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RobustaComponent } from './robusta/robusta.component';
import { ArabicaComponent } from './arabica/arabica.component';
import { VerArabicaComponent } from './ver-arabica/ver-arabica.component';

const routes: Routes = [
  {path:'user', component: UserListComponent},
  {path: 'userCreate',component: UserCreateComponent},
  {path: 'userEdit/:id', component: UserEditComponent},
  {path: 'userDetails/id', component: UserDetailsComponent},
  {path: 'CafetoRobusta', component: RobustaComponent},
  {path: 'CafetoArabica', component: ArabicaComponent},
  {path: 'VerDetallesArabica', component: VerArabicaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
