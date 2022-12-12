import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSwitchComponent } from './d-switch.component';
import { InputsModule } from '../inputs.module';

@NgModule({
  declarations: [DSwitchComponent],
  exports: [DSwitchComponent],
  imports: [CommonModule, InputsModule],
})
export class DSwitchModule {}
