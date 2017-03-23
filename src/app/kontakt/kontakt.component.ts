import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private getMyEmail(): string {
    let firstPart: string = "info";
    let domain: string = "idee-und-idyll.de";
    return firstPart + "@" + domain;
  }

}
