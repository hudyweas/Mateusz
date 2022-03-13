import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSize]',
})
export class SizeDirective implements AfterViewInit {
  private el: any;

  @Input() size: string = '';

  constructor(private element: ElementRef) {
    this.el = element.nativeElement;
  }
  ngAfterViewInit(): void {
    switch (this.size) {
      case 'h1':
        this.setSize('14em');
        break;
      case 'h2':
        this.setSize('9.5em');
        break;
      case 'h3':
        this.setSize('6em');
        break;
      case 'h4':
        this.setSize('5em');
        break;
      default:
        this.setSize(this.size);
        break;
    }
  }

  private setSize(size: string) {
    this.el.style.fontSize = size;
  }
}
