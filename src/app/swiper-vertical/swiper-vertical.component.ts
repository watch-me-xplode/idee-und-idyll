import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SwiperVerticalService } from './swiper-vertical.service';

@Component({
  selector: 'app-swiper-vertical',
  templateUrl: './swiper-vertical.component.html',
  styleUrls: ['./swiper-vertical.component.scss']
})
export class SwiperVerticalComponent implements OnInit {

  private indexCounter = 0;
  private readonly slideCount = 11;

  constructor(private service: SwiperVerticalService) { }

  ngOnInit() {
    // set swiper height after all necessary elements are added to the DOM
    //this.resizeSwiperHeight();
    // init SwiperService
    //this.service.init();
    setInterval(() => {
      this.indexCounter++;
      this.indexCounter = this.indexCounter % this.slideCount;
    }, 2000);
  }

  /**
   * swiper height is rendered to match the current display width settings
   */
  private resizeSwiperHeight() {
    const slides: any = document.getElementsByClassName('swiper-vertical-slide');
    const slideWraper = document.getElementById('swiper-vertical-slide-wrapper');
    if (slides.length > 0) {
      const slidewidth = slides[0].clientWidth;
      const slideHeight = slidewidth / 1200 * 190;
      slideWraper.setAttribute('height', slideHeight + 'px');
      slideWraper.style.height = slideHeight + 'px';
      for (let i = 0; i < slides.length; i++) {
        slides[i].setAttribute('height', slideHeight + 'px');
        slides[i].style.height = slideHeight + 'px';
      }
    }
  }

  private getSwiperClass(index: number): string {
    const easycount = this.slideCount + this.indexCounter;
    const easyindex = this.slideCount + index;
    if (easyindex === easycount) {
      return 'invisible';
    } else if (easyindex < easycount && easyindex > easycount - 5) {
      return 'visible';
    }
    return 'down';
  }
}
