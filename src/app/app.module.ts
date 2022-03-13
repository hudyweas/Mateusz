import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MainPageComponent } from './layouts/pages/main-page/main-page.component';
import { RoutingModule } from './routing.module';
import { OfferPageComponent } from './layouts/pages/offer-page/offer-page.component';
import { MailContactService } from './services/mail-contact.service';
import { VideoPageComponent } from './layouts/pages/video-page/video-page.component';
import { HttpClientModule } from '@angular/common/http';

const viewPages = [MainPageComponent, OfferPageComponent, VideoPageComponent];

@NgModule({
  declarations: [AppComponent, viewPages],
  imports: [
    BrowserModule,
    RoutingModule,
    ComponentsModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [viewPages],
  providers: [MailContactService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
