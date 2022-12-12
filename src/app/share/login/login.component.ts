import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  FormLogin: FormGroup = new FormGroup({
    usuario: new FormControl(''),
    clave: new FormControl(''),
  });
  constructor(
    private router: Router,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private apiService: AppServiceService
  ) {
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {
    localStorage.clear();
  }

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
  ingresar(f: any) {
    let var_ingreso = {
      user: f.usuario,
      clave: f.clave,
    };
    console.log(var_ingreso);
    this.apiService.login(var_ingreso).subscribe((res) => {
      let datos = res;
      if (datos.estado == false) {
        this.showError('Usuario y/o Clave erroneas');
      } else {
        this.showMessageSuccess('Ingreso Exitoso');
        this.FormLogin.reset();
        localStorage.setItem('user', JSON.stringify(datos));
        let ruta: string = datos.rol;
        console.log(ruta.toLowerCase());

        setTimeout(() => {
          this.router.navigate([ruta.toLowerCase()]);
        }, 1200);
      }
    });
  }
}
