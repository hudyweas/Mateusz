import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css'],
})
export class ImgComponent {
  @Input() src: string = '';
  @Input() class: string = '';
  @Input() alt?: string = '';
}
