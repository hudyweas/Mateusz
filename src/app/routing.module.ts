import { NgModule } from '@angular/core';
import { MainPageComponent } from './layouts/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { OfferPageComponent } from './layouts/offer-page/offer-page.component';
import { VideoPageComponent } from './layouts/video-page/video-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },

  {
    path: 'oferta',
    component: OfferPageComponent,
  },
  {
    path: 'filmy',
    component: VideoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
