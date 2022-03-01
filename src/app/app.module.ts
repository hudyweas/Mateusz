import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MainPageComponent } from './layouts/main-page/main-page.component';
import { RoutingModule } from './routing.module';
import { OfferPageComponent } from './layouts/offer-page/offer-page.component';
import { MailContactService } from './services/mail-contact.service';
import { VideoPageComponent } from './layouts/video-page/video-page.component';

const components = [MainPageComponent, OfferPageComponent, VideoPageComponent];

@NgModule({
  declarations: [AppComponent, components],
  imports: [BrowserModule, RoutingModule, ComponentsModule, CommonModule],
  exports: [components],
  providers: [MailContactService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
