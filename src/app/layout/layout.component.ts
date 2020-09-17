import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  title = 'csr';
  visible = true;
  primaryRoutePath = '';
  secondaryRoutePath = [];
  constructor() {
    setTimeout(() => this.primaryRoutePath = 'home', 1000);
    setTimeout(() => this.secondaryRoutePath = ['', { outlets: { side: ['social'] } }], 2000);
  }
}
