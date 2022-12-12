import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {}
  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
