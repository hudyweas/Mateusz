import {
  AfterViewInit,
  Component,
  HostListener,
  ViewChild,
} from '@angular/core';
import { verticalMovieSlider } from 'src/models/sliders-data';

@Component({
  selector: 'app-vertical-scrolling-slider',
  templateUrl: './vertical-scrolling-slider.component.html',
  styleUrls: ['./vertical-scrolling-slider.component.css'],
})
export class VerticalScrollingSliderComponent implements AfterViewInit {
  sliderData = verticalMovieSlider;

  @ViewChild('container') container: any;
  cont?: any;
  recentScroll = false;
  main = 0;
  noSliderElements: number = 0;
  event?: any;
  isScrolling = false;

  ngAfterViewInit(): void {
    this.cont = this.container.nativeElement;
    this.noSliderElements = this.cont.children.length;
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: any) {
    this.event = event;

    console.log(this.main);

    event.deltaY > 0 ? this.handleDeltaDown() : this.handleDeltaUp();
  }

  handleDeltaDown() {
    if (this.isScrolling && this.main < this.noSliderElements) {
      this.disablePageScrolling();
      this.cont.scrollIntoView('slider');
    }

    if (this.canScrollPageDown() && !this.isScrolling) {
      this.disablePageScrolling();
      this.cont.scrollIntoView('slider');
      this.isScrolling = true;

      this.recentScroll = true;
      setTimeout(() => {
        this.recentScroll = false;
      }, 1500);
    }

    if (!this.recentScroll && this.isScrolling) {
      this.recentScroll = true;

      if (this.main < this.noSliderElements) {
        this.main += 1;

        this.cont.scrollTo({
          top: this.sliderHeight() * this.main,
        });
      } else {
        this.isScrolling = false;
      }

      setTimeout(() => {
        this.recentScroll = false;
      }, 1500);
    }
  }

  handleDeltaUp() {
    if (this.isScrolling && this.main > 0) {
      this.disablePageScrolling();
      this.cont.scrollIntoView('slider');
    }

    if (this.canScrollPageUp() && !this.isScrolling) {
      this.disablePageScrolling();
      this.cont.scrollIntoView('slider');
      this.isScrolling = true;

      this.recentScroll = true;
      setTimeout(() => {
        this.recentScroll = false;
      }, 1500);
    }

    if (!this.recentScroll && this.isScrolling) {
      this.recentScroll = true;

      if (this.main > 0) {
        this.main -= 1;

        this.cont.scrollTo({
          top: this.sliderHeight() * this.main,
        });
      } else {
        this.isScrolling = false;
      }

      setTimeout(() => {
        this.recentScroll = false;
      }, 1500);
    }
  }

  canScrollPageDown() {
    const top = this.cont.getBoundingClientRect().top;

    const sliderInView = top > 0 && top < 400;
    const slider = this.main == 0;
    const delta = this.event.deltaY > 0;

    return sliderInView && slider && delta;
  }

  canScrollPageUp() {
    const top = this.cont.getBoundingClientRect().top;

    const sliderInView = top > 0 && top < 400;
    const slider = this.main == this.noSliderElements;
    const delta = this.event.deltaY < 0;

    return sliderInView && slider && delta;
  }

  canScrollSliderDown = () => {
    const target = this.event.target.classList.contains('slider-item');
    const slider = this.main < this.noSliderElements;

    return target && slider;
  };

  canScrollSliderUp = () => {
    const target = this.event.target.classList.contains('slider-item');
    const slider = this.main > 0;
    const delta = this.event.deltaY < 0;

    return target && slider && delta;
  };

  disablePageScrolling = () => {
    this.event.preventDefault();
    this.event.stopPropagation();
  };

  sliderHeight = (): number => {
    return this.container.nativeElement.clientHeight;
  };
}
