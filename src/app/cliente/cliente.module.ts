import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { NavComponent } from './components/nav/nav.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    ClienteComponent,
    NavComponent,
    TiendasComponent,
    ProductosComponent,
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ToastModule,
    RippleModule,
  ],
})
export class ClienteModule {}
