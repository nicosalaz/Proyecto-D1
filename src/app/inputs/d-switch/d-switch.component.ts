import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-d-switch',
  templateUrl: './d-switch.component.html',
  styleUrls: ['./d-switch.component.scss'],
})
export class DSwitchComponent implements OnInit {
  @Input() tipo: any;
  @Input() informacion: any;
  @Output() info_form: any;
  constructor() {}

  ngOnInit(): void {}
}
