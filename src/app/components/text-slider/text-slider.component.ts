import { Component } from '@angular/core';
import { sliderDTO, textSlider } from 'src/models/sliders-data';

@Component({
  selector: 'app-text-slider',
  templateUrl: './text-slider.component.html',
  styleUrls: ['./text-slider.component.css'],
})
export class TextSliderComponent {
  public sliderData: sliderDTO[];

  constructor() {
    this.sliderData = textSlider;
  }
}
