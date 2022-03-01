import {
  AfterViewInit,
  Component,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-horizontal-scrolling-slider',
  templateUrl: './horizontal-scrolling-slider.component.html',
  styleUrls: ['./horizontal-scrolling-slider.component.css'],
})
export class HorizontalScrollingSliderComponent implements AfterViewInit {
  recentScroll = false;
  noSliderElements: any;
  main = 0;

  @ViewChild('container') container: any;
  ngAfterViewInit(): void {
    this.container = this.container.nativeElement;
    this.noSliderElements = this.container.children.length;
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: any) {
    this.disablePageScrolling(event);

    if (!this.recentScroll) {
      this.recentScroll = true;

      if (event.deltaY > 0) {
        if (this.main < this.noSliderElements - 1) {
          this.main += 1;
          this.container.scrollBy({
            left: this.container.children[1].clientWidth + 100, //element width + margin
            behavior: 'smooth',
          });
        }
      } else {
        if (this.main > 0) {
          this.main -= 1;
          this.container.scrollBy({
            left: -(this.container.children[1].clientWidth + 100), //element width + margin
            behavior: 'smooth',
          });
        }
      }

      setTimeout(() => {
        this.recentScroll = false;
      }, 1500);
    }
  }

  disablePageScrolling = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  };
}
