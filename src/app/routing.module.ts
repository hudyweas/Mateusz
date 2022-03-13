import { NgModule } from '@angular/core';
import { MainPageComponent } from './layouts/pages/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { OfferPageComponent } from './layouts/pages/offer-page/offer-page.component';
import { VideoPageComponent } from './layouts/pages/video-page/video-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },

  {
    path: 'offer',
    component: OfferPageComponent,
  },
  {
    path: 'movies',
    component: VideoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
