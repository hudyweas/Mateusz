import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LinkComponent } from './link/link.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ImgComponent } from './img/img.component';
import { H3Component } from './h3/h3.component';
import { LinkListComponent } from './link-list/link-list.component';
import { H2Component } from './h2/h2.component';
import { TextSliderComponent } from './text-slider/text-slider.component';
import { PillarsComponent } from './pillars/pillars.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MemoriesComponent } from './memories/memories.component';
import { H1Component } from './h1/h1.component';
import { H4Component } from './h4/h4.component';
import { PComponent } from './p/p.component';
import { ContactPanelComponent } from './contact-panel/contact-panel.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerticalScrollingSliderComponent } from './vertical-scrolling-slider/vertical-scrolling-slider.component';
import { HorizontalScrollingSliderComponent } from './horizontal-scrolling-slider/horizontal-scrolling-slider.component';
import { SafePipe } from '../app.component';

const components = [
  HeaderComponent,
  LinkComponent,
  ImgComponent,
  H3Component,
  LinkListComponent,
  H2Component,
  TextSliderComponent,
  PillarsComponent,
  ContactComponent,
  FooterComponent,
  AboutMeComponent,
  MemoriesComponent,
  H1Component,
  H4Component,
  PComponent,
  ContactPanelComponent,
  ListComponent,
  VerticalScrollingSliderComponent,
  HorizontalScrollingSliderComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule, BrowserModule, ReactiveFormsModule],
  providers: [SafePipe],
  exports: [components],
})
export class ComponentsModule {}
