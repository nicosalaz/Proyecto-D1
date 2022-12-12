import { Component, Input, OnInit } from '@angular/core';
import {
  faShoppingCart,
  faSignOutAlt,
  faArrowLeft,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() tipo: any;
  faShoppingCart = faShoppingCart;
  faSignOutAlt = faSignOutAlt;
  faArrowLeft = faArrowLeft;
  constructor() {}

  ngOnInit(): void {}
}
