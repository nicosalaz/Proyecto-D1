import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DInputComponent } from './d-input/d-input.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DDropdownComponent } from './d-dropdown/d-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const inputsComponents = [DInputComponent, DDropdownComponent];
@NgModule({
  declarations: [...inputsComponents],
  exports: [...inputsComponents],
  imports: [
    CommonModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class InputsModule {}
