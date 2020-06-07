import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-navigation',
  template: `
    <nav class="nav bg-light">
      <div class="container">
        <div class="nav-left">
          <a class="brand" routerLink="/">AngularStateManagement</a>
        </div>
        <div class="nav-right">
          <div class="tabs">
            <a
              [routerLink]="['/']"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              >Home</a
            >
            <a
              [routerLink]="['/products']"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: false }"
              >Products</a
            >
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .brand {
        font-size: 1.2em;
        padding-left: 0;
      }
    `,
  ],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
