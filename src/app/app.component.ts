import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private landingPage: boolean = false;

  constructor() {
    if (window.location.href.endsWith("idee-und-idyll.de") || window.location.href.endsWith("idee-und-idyll.de/") ||
      window.location.href.endsWith(":4200") || window.location.href.endsWith(":4200/")) {
      this.landingPage = true;
    }
  }

  private toggleLandingPage(): void {
    this.landingPage = !this.landingPage;
  }
}
