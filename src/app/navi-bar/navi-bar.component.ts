import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navi-bar',
  templateUrl: './navi-bar.component.html',
  styleUrls: ['./navi-bar.component.scss']
})
export class NaviBarComponent implements OnInit {
  @Output() toLandingPage = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private gotoLandingPage():void {
    this.router.navigate(['/']);
    this.toLandingPage.emit();
  }
}
