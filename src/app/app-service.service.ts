import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  dominio: string = environment.api_url;
  constructor(private http: HttpClient) {}
  crear_usuario(vatiables: any): Observable<any> {
    let url = this.dominio + 'Tienda/crear_usuario/';
    return this.http.post<any>(url, vatiables);
  }
  login(vatiables: any): Observable<any> {
    let url = this.dominio + 'Tienda/login/';
    return this.http.post<any>(url, vatiables);
  }
  insert_carrito(vatiables: any) {
    let url = this.dominio + 'Tienda/insertCarritoDeCompra/';
    return this.http.post(url, vatiables);
  }
  insert_venta(vatiables: any) {
    let url = this.dominio + 'Tienda/insertVenta/';
    return this.http.post(url, vatiables);
  }
  insert_detalle(vatiables: any) {
    let url = this.dominio + 'Tienda/insertDetalleVenta/';
    return this.http.post(url, vatiables);
  }
  insertar_Dynamic(endpoint: any, vatiables: any) {
    let url = this.dominio + 'Tienda/' + endpoint + '/';
    return this.http.post(url, vatiables);
  }
  editStatusCarritoDeCompra(vatiables: any) {
    let url = this.dominio + 'Tienda/editStatusCarritoDeCompra/';
    return this.http.post(url, vatiables);
  }
  editCantidadCarritoDeCompra(vatiables: any) {
    let url = this.dominio + 'Tienda/editCantidadCarritoDeCompra/';
    return this.http.post(url, vatiables);
  }

  getAllDynamic(vatiables: any) {
    let url = this.dominio + 'Tienda/' + vatiables.name_endpoint + '/';
    return this.http.get(url);
  }
  getAllInventario(vatiables: any) {
    let url = this.dominio + 'Tienda/getAllInventario/' + vatiables.id + '/';
    return this.http.get(url);
  }
  getAllTiendas() {
    let url = this.dominio + 'Tienda/tiendas/';
    return this.http.get(url);
  }
  getAllCarrito(vatiables: any) {
    let url =
      this.dominio + 'Tienda/getAllCarritoByUsuario/' + vatiables.id_user + '/';
    return this.http.get(url);
  }
}
