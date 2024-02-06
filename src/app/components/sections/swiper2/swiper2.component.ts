import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-swiper2',
  templateUrl: './swiper2.component.html',
  styleUrls: ['./swiper2.component.scss'],
})
export class Swiper2Component {
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  countdown: number = 3;
  isBrowser: any;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      register();
      this.swiper = this.swiperRef?.nativeElement.swiper;
      this.startTimer();
    }
  }

  onActiveIndexChange() {
    console.log(this.swiper?.activeIndex);
  }

  startTimer(): void {
    const timerInterval = setInterval(() => {
      if (this.countdown === undefined || this.countdown === 0) {
        this.countdown = 5;
      } else {
        this.countdown--;
      }
    }, 1000);
  }
}
