import { Component } from '@angular/core';
import {
  offer,
  additionalOptions,
  additionalInformations,
} from 'src/models/offerts';
import { listDTO } from 'src/models/offerts';

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.css'],
})
export class OfferPageComponent {
  public offers: listDTO[];
  public additionalOptions: listDTO;
  public additionalInformations: listDTO;

  constructor() {
    this.offers = offer;
    this.additionalOptions = additionalOptions;
    this.additionalInformations = additionalInformations;
  }
}
