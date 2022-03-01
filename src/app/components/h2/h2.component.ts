import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h2',
  templateUrl: './h2.component.html',
  styleUrls: ['./h2.component.css'],
})
export class H2Component {
  @Input() class? = '';
}
