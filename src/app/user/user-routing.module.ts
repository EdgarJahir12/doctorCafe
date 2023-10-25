import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RobustaComponent } from './robusta/robusta.component';
import { ArabicaComponent } from './arabica/arabica.component';
import { VerArabicaComponent } from './ver-arabica/ver-arabica.component';
import { FincasComponent } from './fincas/fincas.component';
import { CafetosComponent } from './cafetos/cafetos.component';
import { HojasComponent } from './hojas/hojas.component';

const routes: Routes = [
  {path:'user/:idUsuario', component: UserListComponent},
  {path: 'userCreate',component: UserCreateComponent},
  {path: 'userEdit/:idUsuario', component: UserEditComponent},
  { path: 'fincas/:idUsuario', component: FincasComponent }, // Ruta para la información de fincas
  {path: 'userDetails/:idUsuario', component: UserDetailsComponent},
  {path: 'cafetos/:idFinca', component: CafetosComponent},
  {path: 'hojas/:idCafeto', component: HojasComponent},
  {path: 'CafetoRobusta', component: RobustaComponent},
  {path: 'CafetoArabica', component: ArabicaComponent},
  {path: 'VerDetallesArabica', component: VerArabicaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
