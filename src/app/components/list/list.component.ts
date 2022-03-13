import { Component, Input } from '@angular/core';
import { packageDTO } from 'src/models/offerts';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() list?: packageDTO[];
}
