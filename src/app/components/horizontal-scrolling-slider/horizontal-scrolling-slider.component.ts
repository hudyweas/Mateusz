import { Component, ViewChild } from '@angular/core';
import { movieInterface, moviePage } from 'src/models/movies';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-horizontal-scrolling-slider',
  templateUrl: './horizontal-scrolling-slider.component.html',
  styleUrls: ['./horizontal-scrolling-slider.component.css'],
})
export class HorizontalScrollingSliderComponent {
  sanitizer;

  videoData: movieInterface[];
  currentVideoSrc: string;
  index: number = 0;

  @ViewChild('current') current: any;
  @ViewChild('previous') previous: any;
  @ViewChild('next') next: any;

  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
    this.videoData = moviePage;
    this.currentVideoSrc = this.videoData[0].src;
  }

  goNext(event: any) {
    if (this.index <= this.videoData.length) {
      this.index += 1;
      this.changeSlide();
    } else {
      this.index = 0;
      this.changeSlide();
    }
  }
  goPrevious(event: any) {
    if (this.index > 0) {
      this.index -= 1;
      this.changeSlide();
    } else {
      this.index = this.videoData.length - 1;
      this.changeSlide();
    }
  }

  changeSlide() {
    this.currentVideoSrc = this.videoData[this.index].src;
  }

  getUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.currentVideoSrc);
  }

  onChange() {
    console.log('change');
  }
}
