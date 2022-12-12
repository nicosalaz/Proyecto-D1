import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import {
  faShoppingBag,
  faBan,
  faCheckCircle,
  faShoppingCart,
  faTrash,
  faPenSquare,
  faMoneyCheck,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [MessageService],
})
export class ProductosComponent implements OnInit {
  @Input() tienda: any;
  productos: any = [];
  productosTem: any = [];
  inpProd: any = '';
  disablesInput = true;
  disabledCarrito = false;
  faShoppingBag = faShoppingBag;
  faShoppingCart = faShoppingCart;
  faBan = faBan;
  fafaCheckCircleBan = faCheckCircle;
  faTrash = faTrash;
  faFile = faFile;
  carrito: any = [];
  totalCarrito: any;
  user: any = JSON.parse(String(localStorage.getItem('user')));
  constructor(
    private apiService: AppServiceService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    let var_productos = { id: this.tienda };
    this.apiService.getAllInventario(var_productos).subscribe((res) => {
      this.productos = res;
      console.log(this.productos);
    });
    this.llenarCarrito();
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
  findProd() {}
  addCarrito(id: any, precio: any) {
    let var_carrito = {
      id_usuario: this.user.cod,
      id_inv: id,
      id_tienda: parseInt(this.tienda),
      cantidad: 1,
      precio: precio,
    };
    console.log(var_carrito);
    this.apiService.insert_carrito(var_carrito).subscribe((res) => {
      console.log(res);
      this.llenarCarrito();
      this.showMessageSuccess('Item agregado');
    });
  }
  calcularTotalCarrito() {
    this.totalCarrito = 0;
    for (const i of this.carrito) {
      this.totalCarrito += i.precio;
    }
  }
  llenarCarrito() {
    this.apiService
      .getAllCarrito({ id_user: this.user.cod })
      .subscribe((r: any) => {
        this.carrito = r['data'];
        console.log(this.carrito);
        this.calcularTotalCarrito();
      });
  }
  comprar() {
    if (this.totalCarrito > 0) {
      let var_compra = {
        id_tienda: parseInt(this.tienda),
        id_usuario: this.user.cod,
        total: this.totalCarrito,
      };
      this.apiService.insert_venta(var_compra).subscribe((r: any) => {
        console.log(r);
        let var_detalle = {
          id_venta: r.id,
          id_carrito: 0,
        };
        for (const i of this.carrito) {
          var_detalle.id_carrito = i.id;
          this.apiService.insert_detalle(var_detalle).subscribe((res) => {
            console.log(res);
          });
        }
        this.showMessageSuccess(
          'Gracias tu compra ' + String(this.user.usuario)
        );
        setTimeout(() => {
          location.reload();
        }, 2000);
      });
    } else {
      this.showError('Debes agregar productos al carrito');
    }
  }
  DeleteItem(id: any) {
    let var_delete = { id_carrito: id };
    this.apiService.editStatusCarritoDeCompra(var_delete).subscribe((r) => {
      console.log(r);
      this.showMessageSuccess('Item eliminado');
      setTimeout(() => {
        location.reload();
      }, 1200);
    });
  }
  action(id: any) {
    if (this.disablesInput == true) {
      this.disablesInput = false;
    } else {
      let dato: any = document.getElementById('inpCantidad');
      let var_edit = {
        id_carrito: id,
        cantidad: dato.value,
      };
      this.apiService.editCantidadCarritoDeCompra(var_edit).subscribe((r) => {
        console.log(r);
        this.showMessageSuccess('Cantidad modificada');
        setTimeout(() => {
          location.reload();
        }, 1200);
      });
    }
  }
}
