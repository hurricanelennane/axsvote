import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <p>Dashboard BOI</p>
  <p>Session ID: {{ sessionId | async }}</p>
  <a id="anchor"></a>
  <p>Token: {{ token | async }}</p>

  Preloaded Modules
  <ul>
    <li *ngFor="let module of modules">{{ module }}</li>
  </ul>
`
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
