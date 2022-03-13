import { Component, Input, OnInit } from '@angular/core';
import { fistViewTextRouter, routerDTO } from 'src/models/routers-link';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
})
export class LinkListComponent implements OnInit {
  @Input() links: string = '';
  @Input() class: string = '';

  ngOnInit(): void {
    this.setRouterLinks(this.links);
  }

  public linkList: routerDTO[] | undefined;

  private setRouterLinks(links: string) {
    switch (links) {
      case 'fistViewTextRouter':
        this.linkList = fistViewTextRouter;
        break;

      default:
        break;
    }
  }
}
