import { Component, OnInit } from '@angular/core';

import { BildergalerieStorage } from "../shared/services/bildergalerie-storage.service";

import { ImageBildergalerie } from "../shared/models/image-bildergalerie.model";
import { LocationBildergalerie } from "../shared/models/location-bildergalerie.model";

@Component({
  selector: 'app-bildergalerie',
  templateUrl: './bildergalerie.component.html',
  styleUrls: ['./bildergalerie.component.scss']
})
export class BildergalerieComponent implements OnInit {

  private locations: LocationBildergalerie[] = [];

  constructor(private storage: BildergalerieStorage) { }

  ngOnInit() {
    this.locations = this.storage.getLocations();
  }
}