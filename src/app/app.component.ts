import { Component } from '@angular/core';
import { Vote } from './vote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:
  `
  <nav>
    <button class = "admin-nav"><a routerLink="/admin-panel" routerLinkActive="active">Admin Panel</a></button>
    <button class = "home-nav"><a routerLink="/home">Home</a></button>
  </nav>
  <h1>
      <img width="50" alt="AXS Logo" src="../assets/axs_coat.png"> 
      AXSVOTE
      <img width="50" alt="AXS Logo" src="../assets/axs_coat.png">
    </h1>
    <router-outlet></router-outlet>
    <app-vote-form></app-vote-form>
    `
})
// <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
export class AppComponent {
  // title = 'AXSVote';

  public adminRoute = function () {
    console.log("adminRoute called");
  }
}