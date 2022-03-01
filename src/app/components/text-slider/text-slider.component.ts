import { Component } from '@angular/core';
import { textSlider } from 'src/models/sliders-data';

@Component({
  selector: 'app-text-slider',
  templateUrl: './text-slider.component.html',
  styleUrls: ['./text-slider.component.css'],
})
export class TextSliderComponent {
  sliderData;

  constructor() {
    this.sliderData = textSlider;
  }
}
