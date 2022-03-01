import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h3',
  templateUrl: './h3.component.html',
  styleUrls: ['./h3.component.css'],
})
export class H3Component {
  @Input() class? = '';
}
