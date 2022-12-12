import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { timeout } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';
import { LoginComponent } from '../login.component';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss'],
  providers: [MessageService],
})
export class RegisterClientComponent implements OnInit {
  FormRegister = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    nit: new FormControl(''),
    telefono: new FormControl(''),
    usuario: new FormControl(''),
    clave: new FormControl(''),
  });
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private primengConfig: PrimeNGConfig,
    private apiService: AppServiceService,
    private messageService: MessageService
  ) {
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {}

  showMessageSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }
  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }

  async createUser(f: any) {
    let text_p = document.getElementById('msj-clave');
    let var_usuario = {
      nit: f['nit'],
      nombre: f['nombre'],
      apellidos: f['apellidos'],
      telefono: f['telefono'],
      user: f['usuario'],
      clave: f['clave'],
    };
    if (
      var_usuario.nit.length == 0 ||
      var_usuario.nombre.length == 0 ||
      var_usuario.apellidos.length == 0 ||
      var_usuario.telefono.length == 0 ||
      var_usuario.user.length == 0 ||
      var_usuario.clave.length == 0
    ) {
      this.showError('Faltan campos por llenar');
    } else {
      this.apiService.crear_usuario(var_usuario).subscribe(
        (resp) => {
          console.log(resp);
          this.FormRegister.reset();
          this.showMessageSuccess('Registro Exitoso');
          setTimeout(() => {
            this.router.navigate(['']);
          }, 3000);
        },
        (err) => {
          this.showError('Error, no se pudo registrar');
        }
      );
    }
  }
}
