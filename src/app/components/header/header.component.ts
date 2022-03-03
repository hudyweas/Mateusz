import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  hidden = false;

  @HostListener('window:wheel', ['$event'])
  onScroll(event: any) {
    event.deltaY > 0 ? (this.hidden = true) : (this.hidden = false);
    console.log(this.hidden);
  }
}
