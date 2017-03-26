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
            new ImageBildergalerie("Ruhebringendes_Grün")
        );
        let berglern: LocationBildergalerie = new LocationBildergalerie().setLocation("Berglern").setImageName("test3").setImages(berglernImages);
        this.locations.push(berglern);
        

        //Mettenbach
        let mettenbachImages: ImageBildergalerie[] = [];
        mettenbachImages.push(
            new ImageBildergalerie("1"),
            new ImageBildergalerie("2"),
            new ImageBildergalerie("3"),
            new ImageBildergalerie("4"),
            new ImageBildergalerie("5"),
            new ImageBildergalerie("6"),
            new ImageBildergalerie("7"),
            new ImageBildergalerie("8"),
            new ImageBildergalerie("9"),
            new ImageBildergalerie("10"),
            new ImageBildergalerie("11"),

            new ImageBildergalerie("1").setDeprecated(true),
            new ImageBildergalerie("2").setDeprecated(true)
        );
        let mettenbach: LocationBildergalerie = new LocationBildergalerie().setLocation("Mettenbach").setLocationUrl("mettenbach").setImageName("test2").setImages(mettenbachImages);
        this.locations.push(mettenbach);


        //Unterwattenbach
        let unterwattenbachImages: ImageBildergalerie[] = [];
        unterwattenbachImages.push(
            new ImageBildergalerie("1"),
            new ImageBildergalerie("2"),
            new ImageBildergalerie("3"),
            new ImageBildergalerie("4"),
            new ImageBildergalerie("5"),
            new ImageBildergalerie("6"),
            new ImageBildergalerie("7"),
            new ImageBildergalerie("8"),
            new ImageBildergalerie("9"),
            new ImageBildergalerie("10"),
            new ImageBildergalerie("11"),

            new ImageBildergalerie("1").setDeprecated(true),
            new ImageBildergalerie("2").setDeprecated(true)
        );
        let unterwattenbach: LocationBildergalerie = new LocationBildergalerie().setLocation("Unterwattenbach").setLocationUrl("unterwattenbach").setImageName("test").setImages(unterwattenbachImages);
        this.locations.push(unterwattenbach);
    }

    public getLocations(): LocationBildergalerie[] {
        return this.locations;
    }
}