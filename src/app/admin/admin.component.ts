import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from './metadata/metadata';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  url: any;
  infoTabla: any;
  admin: boolean = false;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((resp) => {
      this.url = resp;
      if (this.url.type == undefined) {
        this.admin = true;
      }
    });
    console.log(this.url);
    data.find((x: any) => {
      if (x.nombre == this.url.type) {
        this.infoTabla = x;
      }
    });
  }
}
