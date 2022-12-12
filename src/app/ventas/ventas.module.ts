import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import { NavComponent } from './components/nav/nav.component';
import { ReportesVentasComponent } from './components/reportes-ventas/reportes-ventas.component';

@NgModule({
  declarations: [VentasComponent, NavComponent, ReportesVentasComponent],
  imports: [CommonModule, VentasRoutingModule, FontAwesomeModule],
})
export class VentasModule {}
