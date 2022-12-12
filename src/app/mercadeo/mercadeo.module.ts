import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MercadeoRoutingModule } from './mercadeo-routing.module';
import { MercadeoComponent } from './mercadeo.component';
import { NavComponent } from './components/nav/nav.component';
import { ReportesMercadeoComponent } from './components/reportes-mercadeo/reportes-mercadeo.component';

@NgModule({
  declarations: [MercadeoComponent, NavComponent, ReportesMercadeoComponent],
  imports: [CommonModule, MercadeoRoutingModule, FontAwesomeModule],
})
export class MercadeoModule {}
