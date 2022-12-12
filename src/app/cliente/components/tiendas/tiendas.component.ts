import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.scss'],
})
export class TiendasComponent implements OnInit {
  datosTiendas: any = [];
  inpTienda: any = '';
  datosTemp: any[] = [];
  pantalla: string = '';
  constructor(
    private apiService: AppServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.apiService.getAllTiendas().subscribe((resp) => {
      //console.log(resp);
      this.datosTiendas = resp;
      this.datosTemp = this.datosTiendas;
    });
  }
  findTienda() {
    this.datosTiendas = this.datosTemp.filter((val) =>
      val.localidad.toLowerCase().includes(this.inpTienda.toLowerCase())
    );
  }
  deplegarProductos(x: any) {
    this.router.navigate(['cliente/productos/' + x]);
  }
}
