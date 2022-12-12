import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-d-dropdown',
  templateUrl: './d-dropdown.component.html',
  styleUrls: ['./d-dropdown.component.scss'],
})
export class DDropdownComponent implements OnInit {
  @Input() informacion: any;
  tiendas: any = [];
  constructor() {}

  ngOnInit(): void {}
}
