import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppServiceService } from 'src/app/app-service.service';
import { data } from '../../metadata/metadata';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
  providers: [MessageService],
})
export class TablaComponent implements OnInit {
  @Input() datos: any;
  inventario: any;
  tabla: any = [];
  loading: boolean = true;
  tiendas: any = [];
  datosTienda: any[] = [];
  IsInventario: boolean = false;
  selectedCity2: any;
  productDialog: boolean = false;
  productEditDialog: boolean = false;
  submitted: boolean = true;
  modal_info: any;
  CreateObject: FormGroup = new FormGroup({});
  EditObject: FormGroup = new FormGroup({});
  varEdit: any;
  constructor(
    private apiService: AppServiceService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.modal_info = this.datos.modal;
    for (const i of this.modal_info) {
      if (i.tipo == 'select') {
        this.apiService
          .getAllDynamic({ name_endpoint: i.nombre_endpoint })
          .subscribe((res: any) => {
            let keyValue = i.value;
            let keyLabel = i.label;
            i.informacion.push({ [keyValue]: '', [keyLabel]: 'Ninguna' });
            for (const r of res) {
              i.informacion.push(r);
            }
          });
      }
    }
    console.log(this.modal_info);
    if (this.datos.nombre != 'inventario') {
      this.apiService.getAllDynamic(this.datos).subscribe((resp) => {
        this.tabla = resp;
      });
    } else {
      this.IsInventario = true;
      this.apiService.getAllTiendas().subscribe((resp) => {
        this.tiendas = resp;
        for (const x of this.tiendas) {
          this.datosTienda.push({
            id: x.id,
            localidad: x.localidad,
          });
        }
      });
    }
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    for (const f of this.modal_info) {
      this.CreateObject.addControl(f.nombre_form, new FormControl(''));
      this.EditObject.addControl(f.nombre_form, new FormControl(''));
    }
    console.log(this.CreateObject.value);
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
  getColumnas(): any[] {
    let nombres = [];
    for (let i of this.datos.tabla) {
      nombres.push(i.nombre_endpoint);
    }
    return nombres;
  }
  filtrarInv() {
    if (this.selectedCity2 != null) {
      let var_tienda = { id: this.selectedCity2 };
      this.apiService.getAllInventario(var_tienda).subscribe((result) => {
        this.tabla = result;
      });
    }
  }
  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  saveProduct(values: any) {
    this.apiService
      .insertar_Dynamic(this.datos.name_insert_endpoint, values)
      .subscribe((r) => {
        console.log(r);
        this.showMessageSuccess('Item insertado');
        setTimeout(() => {
          location.reload();
        }, 1500);
      });
  }
  openModalEdit(data: any) {
    this.varEdit = data;
    //console.log(data);
    let conta = 0;
    for (const d of this.modal_info) {
      if (d.tipo == 'select') {
        for (const f of d.informacion) {
          if (f[d.label] == data[d.nombre_col]) {
            d.informacion[0] = f;
            d.informacion.splice(conta, 1);
            //console.log(d.informacion);
          }
          conta++;
        }
      }
    }
    this.productEditDialog = true;
  }
  eliminar(data: any) {
    console.log(data);
    this.apiService
      .insertar_Dynamic(this.datos.name_delete_endpoint, data)
      .subscribe((r) => {
        console.log(r);
        this.showMessageSuccess('Item eliminado');
        setTimeout(() => {
          location.reload();
        }, 1500);
      });
  }
  edit(data: any) {
    console.log(data);

    this.apiService
      .insertar_Dynamic(this.datos.name_edit_endpoint, data)
      .subscribe((r) => {
        console.log(r);
        this.showMessageSuccess('Item actualizado');
        setTimeout(() => {
          location.reload();
        }, 1500);
      });
  }
}
