import { Injectable } from "@angular/core";

import { ImageBildergalerie } from "../models/image-bildergalerie.model";
import { LocationBildergalerie } from "../models/location-bildergalerie.model";
import { ImagetagBildergalerie } from "../enums/imagetag-bildergalerie.enum";

@Injectable()
export class BildergalerieStorage {

    private locations: LocationBildergalerie[] = [];

    constructor() {
        //Berglern
        // let berglernImages: ImageBildergalerie[] = [];
        // berglernImages.push(
        //     new ImageBildergalerie("Ruhebringendes_Grün")
        // );
        // let berglern: LocationBildergalerie = new LocationBildergalerie().setLocation("Berglern").setImageName("test3").setImages(berglernImages);
        // this.locations.push(berglern);
        

        //Landshut
        let landshutImages: ImageBildergalerie[] = [];
        landshutImages.push(
            new ImageBildergalerie("1")
        );
        let landshut: LocationBildergalerie = new LocationBildergalerie().setLocation("Landshut").setSublocation("").setLocationUrl("landshut").setImages(landshutImages);
        this.locations.push(landshut);
        

        //Mettenbach Garten 1
        let mettenbachImages1: ImageBildergalerie[] = [];
        mettenbachImages1.push(
            new ImageBildergalerie("1"),
            new ImageBildergalerie("2"),
            new ImageBildergalerie("3"),

            new ImageBildergalerie("1").setDeprecated(true),
            new ImageBildergalerie("2").setDeprecated(true)
        );
        let mettenbach1: LocationBildergalerie = new LocationBildergalerie().setLocation("Mettenbach").setSublocation("Garten 1").setLocationUrl("mettenbach_1").setImages(mettenbachImages1);
        this.locations.push(mettenbach1);
        

        //Mettenbach Garten 2
        let mettenbachImages2: ImageBildergalerie[] = [];
        mettenbachImages2.push(
            new ImageBildergalerie("1"),
            new ImageBildergalerie("2"),
            new ImageBildergalerie("3"),
            new ImageBildergalerie("4")
        );
        let mettenbach2: LocationBildergalerie = new LocationBildergalerie().setLocation("Mettenbach").setSublocation("Garten 2").setLocationUrl("mettenbach_2").setImages(mettenbachImages2);
        this.locations.push(mettenbach2);
        

        //Mettenbach Garten 3
        let mettenbachImages3: ImageBildergalerie[] = [];
        mettenbachImages3.push(
            new ImageBildergalerie("1"),
            new ImageBildergalerie("2"),
            new ImageBildergalerie("3"),
            new ImageBildergalerie("4"),
            new ImageBildergalerie("5")
        );
        let mettenbach3: LocationBildergalerie = new LocationBildergalerie().setLocation("Mettenbach").setSublocation("Garten 3").setLocationUrl("mettenbach_3").setImages(mettenbachImages3);
        this.locations.push(mettenbach3);
        

        //Balkon und Innengestaltung
        let balkonImages: ImageBildergalerie[] = [];
        balkonImages.push(
            new ImageBildergalerie("1"),
            new ImageBildergalerie("2"),
            new ImageBildergalerie("3"),
            new ImageBildergalerie("4"),
            new ImageBildergalerie("5"),
            new ImageBildergalerie("6")
        );
        let balkon: LocationBildergalerie = new LocationBildergalerie().setLocation("Balkon & Innenraum").setSublocation("").setLocationUrl("balkon_und_innengestaltung").setImages(balkonImages);
        this.locations.push(balkon);
        

        //Unterschleissheim
        let unterschleissheimImages: ImageBildergalerie[] = [];
        unterschleissheimImages.push(
            new ImageBildergalerie("1"),
            new ImageBildergalerie("2"),
            new ImageBildergalerie("3"),
            new ImageBildergalerie("4"),

            new ImageBildergalerie("1").setDeprecated(true),
            new ImageBildergalerie("2").setDeprecated(true)
        );
        let unterschleissheim: LocationBildergalerie = new LocationBildergalerie().setLocation("Unterschleissheim").setSublocation("").setLocationUrl("unterschleissheim").setImages(unterschleissheimImages);
        this.locations.push(unterschleissheim);


        //Unterwattenbach
        // let unterwattenbachImages: ImageBildergalerie[] = [];
        // unterwattenbachImages.push(
        //     new ImageBildergalerie("1"),
        //     new ImageBildergalerie("2"),
        //     new ImageBildergalerie("3"),
        //     new ImageBildergalerie("4"),
        //     new ImageBildergalerie("5"),
        //     new ImageBildergalerie("6"),
        //     new ImageBildergalerie("7"),
        //     new ImageBildergalerie("8"),
        //     new ImageBildergalerie("9"),
        //     new ImageBildergalerie("10"),
        //     new ImageBildergalerie("11"),

        //     new ImageBildergalerie("1").setDeprecated(true),
        //     new ImageBildergalerie("2").setDeprecated(true)
        // );
        // let unterwattenbach: LocationBildergalerie = new LocationBildergalerie().setLocation("Unterwattenbach").setLocationUrl("unterwattenbach").setImageName("test").setImages(unterwattenbachImages);
        // this.locations.push(unterwattenbach);
    }

    public getLocations(): LocationBildergalerie[] {
        return this.locations;
    }
}