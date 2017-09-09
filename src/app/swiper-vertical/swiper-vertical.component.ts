import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-swiper-vertical',
  templateUrl: './swiper-vertical.component.html',
  styleUrls: ['./swiper-vertical.component.scss']
})
export class SwiperVerticalComponent implements OnInit {

  private indexCounter = 0;
  private counterStarted = false;
  private readonly slideCount = 22;
  private readonly visibleSlides = 7;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.counterStarted = true;
      setInterval(() => {
        this.indexCounter++;
        this.indexCounter = this.indexCounter % this.slideCount;
      }, 2000);
    }, 500);
  }

  private isSlideVisible(index: number): boolean {
    let indexPosition = index - this.indexCounter;
    if (indexPosition < 0) {
      indexPosition += this.slideCount;
    }
    return indexPosition < this.visibleSlides;
  }
}
