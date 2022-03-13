import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { movieInterface, moviePage } from 'src/models/movies';

@Component({
  selector: 'app-horizontal-scrolling-slider',
  templateUrl: './horizontal-scrolling-slider.component.html',
  styleUrls: ['./horizontal-scrolling-slider.component.css'],
})
export class HorizontalScrollingSliderComponent implements AfterViewInit {
  public videoData: movieInterface[];
  public index: number = 1;

  private noSliders: number = 0;

  @ViewChild('slider') slider: any;

  constructor() {
    this.videoData = moviePage;
  }
  ngAfterViewInit(): void {
    this.noSliders = this.slider.nativeElement.children.length;
  }

  goPrevious() {
    if (this.index > 0) {
      this.index -= 1;
    } else {
      this.index = this.noSliders - 1;
    }
  }

  goNext() {
    if (this.index < this.noSliders - 1) {
      this.index += 1;
    } else {
      this.index = 0;
    }
  }
}
