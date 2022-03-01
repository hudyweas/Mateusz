import { Component } from '@angular/core';
import {
  offer,
  additionalOptions,
  additionalInformations,
} from 'src/models/offerts';

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.css'],
})
export class OfferPageComponent {
  oferta;
  opcjeDodatkowe;
  informacjeDodatkowe;

  constructor() {
    this.oferta = offer;
    this.opcjeDodatkowe = additionalOptions;
    this.informacjeDodatkowe = additionalInformations;
  }
}
