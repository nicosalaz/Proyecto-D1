import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-d-input',
  templateUrl: './d-input.component.html',
  styleUrls: ['./d-input.component.scss'],
})
export class DInputComponent implements OnInit {
  @Input() informacion: any;
  constructor() {}

  ngOnInit(): void {}
}
