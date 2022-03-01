import { Component } from '@angular/core';
import { pillarsMainPage } from 'src/models/pillars';

@Component({
  selector: 'app-pillars',
  templateUrl: './pillars.component.html',
  styleUrls: ['./pillars.component.css'],
})
export class PillarsComponent {
  constructor() {
    this.pillarList = pillarsMainPage;
  }
  pillarList;
}
