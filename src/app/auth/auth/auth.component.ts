import { Component, OnInit } from '@angular/core';
import { Navigation, NavigationExtras, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { DataSharingService } from 'src/app/services/data-sharing.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  dateValue: any
  nombre!: string
  form!: FormGroup;
  form2!: FormGroup;
  apellidos!: string
  fechaNacimiento!: Date
  correoElectronico!: string
  contrasena!: string
  registroActivo: boolean = true;
  contrasenaConfirm!: string
  sexo!: string

  registros:any

  idUsuario!: string
 

  constructor(
      private router: Router,
      private http: HttpService,
      private formBuilder: FormBuilder,
      private formBuilder2: FormBuilder,
      private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: '',
      apellidos: '',
      fechaNacimiento: 'Date | null = null',
      sexo: '',
      correoElectronico: '',
      contrasena: '',
      confirmarContrasena: '',
    });

    this.form2 = this.formBuilder2.group({
      correoElectronico:'',
      password:'',
    });
  }

  ngAfterViewInit() {
    this.cargarUsuarios()
  }

  get date(): any {
    return this.dateValue;
  }
  set date(value: any) {
    console.log({ value });
    this.dateValue = value;
  }

  cambiarPestana(pestana: boolean) {
    this.registroActivo = pestana;
  }

  registrarse() {
    if (this.apellidos) {
      const apellidosSeparados = this.apellidos.split(' ');
      const apellidoPaterno = apellidosSeparados[0];
      const apellidoMaterno = apellidosSeparados.slice(1).join(' ');
      this.nombre = this.form.get('nombre')?.value;
      console.log('Valor de this.nombre en registrarse:', this.nombre); // Agrega esta línea
      const fechaFormateada = this.fechaNacimiento?.toISOString().split('T')[0];
      const datos = {
        nombre: this.nombre,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        fechaNacimiento: fechaFormateada,
        sexo: 'hombre',
        telefono: null,
        correoElectronico: this.correoElectronico,
        contrasena: this.contrasena
      };
      console.log('Datos de registro:', datos); // Imprimir datos en consola

      try {
        const response = this.http.postDataUsuarios(datos);
        console.log("Registro exitoso: ", response);
      } catch (error) {
        console.error("error: " + error)
      }
    } else {
      console.error("Los apellidos no están definidos");
    }
  }

  cargarUsuarios(){
    this.http.loadUsers().then(
      (res: any) => {
        this.registros = res;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  comprobarCredenciales() {
    const correo = this.correoElectronico;
    const contrasena = this.contrasena;

    if (this.registros) {
      const usuarioEncontrado = this.registros.find((usuario: any) => usuario.correoElectronico === correo);

      if (usuarioEncontrado) {
        if (usuarioEncontrado.contrasena === contrasena) {
          console.log("Credenciales válidas. Iniciar sesión... " + usuarioEncontrado.idUsuario)
          this.idUsuario = usuarioEncontrado.idUsuario
          return true
        } else {
          console.log("Contraseña incorrecta")
          return false
        }
      } else {
        console.log("Usuario no encontrado")
        return false
      }
    } else {
      console.log("No hay registros cargados")
      return false
    }
  }
  continuar() {
    console.log('Valor de this.nombre antes de la navegación:', this.nombre); // Agrega esta línea
    if (this.comprobarCredenciales()) {
      console.log('id:', this.idUsuario);
      console.log('nombre:', this.nombre);
      console.log('correo:', this.correoElectronico);
  
      const userData = {
        idUsuario: this.idUsuario,
        nombre: this.nombre,
        correoElectronico: this.correoElectronico
      };
  
      this.dataSharingService.setUserData(userData); // Guardar datos en el servicio
  
      this.router.navigate(['/panel/user']);
    } else {
      console.log("error");
    }
  }
  
  formatDate(event: any) {
    const dateString = event.target.value;
    this.fechaNacimiento = new Date(dateString);
  }
 
}

