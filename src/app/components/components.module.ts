import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LinkComponent } from './link/link.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ImgComponent } from './img/img.component';
import { LinkListComponent } from './link-list/link-list.component';
import { TextSliderComponent } from './text-slider/text-slider.component';
import { PillarsComponent } from '../layouts/parts/pillars/pillars.component';
import { ContactComponent } from '../layouts/parts/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from '../layouts/parts/about-me/about-me.component';
import { MemoriesComponent } from '../layouts/parts/memories/memories.component';
import { PComponent } from './p/p.component';
import { ContactPanelComponent } from './contact-panel/contact-panel.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerticalScrollingSliderComponent } from './vertical-scrolling-slider/vertical-scrolling-slider.component';
import { HorizontalScrollingSliderComponent } from './horizontal-scrolling-slider/horizontal-scrolling-slider.component';
import { SafePipe } from '../pipes/safe.pipe';
import { HComponent } from './h/h.component';
import { SizeDirective } from '../directives/size.directive';

const components = [
  HeaderComponent,
  LinkComponent,
  ImgComponent,
  LinkListComponent,
  TextSliderComponent,
  PillarsComponent,
  ContactComponent,
  FooterComponent,
  AboutMeComponent,
  MemoriesComponent,
  PComponent,
  ContactPanelComponent,
  ListComponent,
  VerticalScrollingSliderComponent,
  HorizontalScrollingSliderComponent,
  HComponent,
];

@NgModule({
  declarations: [components, SafePipe, SizeDirective],
  imports: [CommonModule, RouterModule, BrowserModule, ReactiveFormsModule],
  exports: [components],
})
export class ComponentsModule {}
