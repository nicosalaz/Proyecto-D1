import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercadeoComponent } from './mercadeo.component';

const routes: Routes = [{ path: '', component: MercadeoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MercadeoRoutingModule {}
