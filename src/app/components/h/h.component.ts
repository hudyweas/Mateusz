import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h',
  templateUrl: './h.component.html',
  styleUrls: ['./h.component.css'],
})
export class HComponent {
  @Input() class?: string = '';
}
