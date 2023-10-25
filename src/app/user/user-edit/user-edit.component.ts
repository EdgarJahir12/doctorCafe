import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit  {
  usuario: any; // Cambiado a tipo any por ahora
  idUsuario: string | null = null; // Cambiado a string | null

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService // Asume que tienes un servicio de usuario
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idUsuario = params.get('idUsuario');
      if (idUsuario !== null) {
        this.idUsuario = idUsuario;
        console.log('Valor de idUsuario:', this.idUsuario);
  
        // Llamar al servicio para obtener las fincas por usuario
        this.usuarioService.getUsuario(+this.idUsuario).subscribe(
          usuario => {
            this.usuario = usuario;
            console.log('Usuario obtenido:', this.usuario);
          },
          error => {
            console.error('Error al obtener usuario:', error);
          }
        );
      }
    });
  }
  

}
