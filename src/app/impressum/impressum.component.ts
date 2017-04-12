import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private getMyEmail(): string {
    const firstPart = 'info';
    const lastPart = 'idee-und-idyll.de';
    return firstPart + '@' + lastPart;
  }

  private getDeveloperEmail(): string {
    const firstPart = 'niko';
    const lastPart = 'watch-me-xplode.de';
    return firstPart + '@' + lastPart;
  }

}
