import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  pantalla: string = '';
  tienda: string = '';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      let parametros = res;
      this.pantalla = parametros['type'];
      this.tienda = parametros['cod'];
    });
    console.log(this.pantalla);
  }
}
