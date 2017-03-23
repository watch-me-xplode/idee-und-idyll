import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @Output() toLandingPage = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() { }

  private gotoLandingPage():void {
    this.toLandingPage.emit();
  }
}
