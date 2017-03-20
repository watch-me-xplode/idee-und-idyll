import { Injectable } from "@angular/core";

import { ImageBildergalerie } from "../models/image-bildergalerie.model";
import { LocationBildergalerie } from "../models/location-bildergalerie.model";
import { ImagetagBildergalerie } from "../enums/imagetag-bildergalerie.enum";

@Injectable()
export class BildergalerieStorage {

    private locations: LocationBildergalerie[] = [];

    constructor() {
        //Berglern
        let berglernImages: ImageBildergalerie[] = [];
        berglernImages.push(
            new ImageBildergalerie("Ruhebringendes Grün").setYear(2010),
        );
        let berglern: LocationBildergalerie = new LocationBildergalerie().setLocation("Berglern").setImageName("test3").setImages(berglernImages);
        this.locations.push(berglern);
        

        //Mettenbach
        let mettenbachImages: ImageBildergalerie[] = [];
        mettenbachImages.push(
            new ImageBildergalerie("").setYear(2010),
            new ImageBildergalerie("").setYear(2011)
        );
        let mettenbach: LocationBildergalerie = new LocationBildergalerie().setLocation("Mettenbach").setImageName("test2").setImages(mettenbachImages);
        this.locations.push(mettenbach);


        //Unterwattenbach
        let unterwattenbachImages: ImageBildergalerie[] = [];
        unterwattenbachImages.push(
            new ImageBildergalerie("Rosenbogen_mit_Blick_auf_Teichanlage").setYear(2006),
            new ImageBildergalerie("Teichidyll").setYear(2010)
        );
        let unterwattenbach: LocationBildergalerie = new LocationBildergalerie().setLocation("Unterwattenbach").setImageName("test").setImages(unterwattenbachImages);
        this.locations.push(unterwattenbach);
    }

    public getLocations(): LocationBildergalerie[] {
        return this.locations;
    }
}