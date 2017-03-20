import { Injectable } from "@angular/core";

import { ImageBildergalerie } from "../models/image-bildergalerie.model";
import { LocationBildergalerie } from "../models/location-bildergalerie.model";
import { ImagetagBildergalerie } from "../enums/imagetag-bildergalerie.enum";

@Injectable()
export class BildergalerieStorage {

    private locations: LocationBildergalerie[] = [];

    constructor() {
        //Unterwattenbach
        let unterwattenbachImages: ImageBildergalerie[] = [];
        unterwattenbachImages.push(
            new ImageBildergalerie("").setYear(2010),
            new ImageBildergalerie("").setYear(2011)
        );
        let unterwattenbach: LocationBildergalerie = new LocationBildergalerie().setLocation("Unterwattenbach").setImages(unterwattenbachImages);
        this.locations.push(unterwattenbach);
        

        //Mettenbach
        let mettenbachImages: ImageBildergalerie[] = [];
        mettenbachImages.push(
            new ImageBildergalerie("").setYear(2010),
            new ImageBildergalerie("").setYear(2011)
        );
        let mettenbach: LocationBildergalerie = new LocationBildergalerie().setLocation("Mettenbach").setImages(mettenbachImages);
        this.locations.push(mettenbach);
    }

    public getLocations(): LocationBildergalerie[] {
        return this.locations;
    }
}