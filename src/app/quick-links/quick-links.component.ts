import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss']
})
export class QuickLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private getMyEmail(): string {
    let firstPart: string = "info";
    let domain: string = "idee-und-idyll.de";
    return firstPart + "@" + domain;
  }

}
