import { Injectable } from '@angular/core';

import { ImageBildergalerie } from '../models/image-bildergalerie.model';
import { LocationBildergalerie } from '../models/location-bildergalerie.model';
import { ImagetagBildergalerie } from '../enums/imagetag-bildergalerie.enum';

@Injectable()
export class BildergalerieStorage {

    private locations: LocationBildergalerie[] = [];

    constructor() {
        // Altheim
        const altheimImages: ImageBildergalerie[] = [];
        altheimImages.push(
            new ImageBildergalerie('1'),
            new ImageBildergalerie('2'),
            new ImageBildergalerie('3'),
            new ImageBildergalerie('4'),
            new ImageBildergalerie('5'),
            new ImageBildergalerie('6'),

            new ImageBildergalerie('1').setDeprecated(true),
            new ImageBildergalerie('2').setDeprecated(true),
            new ImageBildergalerie('3').setDeprecated(true)
        );
        const altheim: LocationBildergalerie = new LocationBildergalerie()
            .setLocation('Altheim').setLocationUrl('altheim').setImages(altheimImages);
        this.locations.push(altheim);


        // Berglern
        const berglernImages: ImageBildergalerie[] = [];
        berglernImages.push(
            new ImageBildergalerie('1'),
            new ImageBildergalerie('2'),
            new ImageBildergalerie('3')
        );
        const berglern: LocationBildergalerie = new LocationBildergalerie()
            .setLocation('Berglern').setLocationUrl('berglern').setImages(berglernImages);
        this.locations.push(berglern);


        // Impressionen
        const impressionenImages: ImageBildergalerie[] = [];
        impressionenImages.push(
            new ImageBildergalerie('1'),
            new ImageBildergalerie('2'),
            new ImageBildergalerie('3'),
            new ImageBildergalerie('4'),
            new ImageBildergalerie('5'),
            new ImageBildergalerie('6'),
            new ImageBildergalerie('7'),
            new ImageBildergalerie('8'),
            new ImageBildergalerie('9'),
            new ImageBildergalerie('10'),
            new ImageBildergalerie('11'),
            new ImageBildergalerie('12'),
            new ImageBildergalerie('13'),
            new ImageBildergalerie('14'),
            new ImageBildergalerie('15'),
            new ImageBildergalerie('16'),
            new ImageBildergalerie('17'),
            new ImageBildergalerie('18'),
            new ImageBildergalerie('19'),
            new ImageBildergalerie('20'),
            new ImageBildergalerie('21'),
            new ImageBildergalerie('22'),
            new ImageBildergalerie('23'),
            new ImageBildergalerie('24')
        );
        const impressionen: LocationBildergalerie = new LocationBildergalerie()
            .setLocation('Impressionen').setLocationUrl('impressionen').setImages(impressionenImages);
        this.locations.push(impressionen);


        // Landshut Garten 1
        const landshutImages1: ImageBildergalerie[] = [];
        landshutImages1.push(
            new ImageBildergalerie('1'),
            new ImageBildergalerie('2'),
            new ImageBildergalerie('3')
        );
        const landshut1: LocationBildergalerie = new LocationBildergalerie()
            .setLocation('Landshut').setSublocation('Garten 1').setLocationUrl('landshut_1').setImages(landshutImages1);
        this.locations.push(landshut1);

        // Landshut Garten 2
        const landshutImages2: ImageBildergalerie[] = [];
        landshutImages2.push(
            new ImageBildergalerie('1'),
            new ImageBildergalerie('2'),
            new ImageBildergalerie('3'),
            new ImageBildergalerie('4'),
            new ImageBildergalerie('5'),

            new ImageBildergalerie('1').setDeprecated(true),
            new ImageBildergalerie('2').setDeprecated(true)
        );
        const landshut2: LocationBildergalerie = new LocationBildergalerie()
            .setLocation('Landshut').setSublocation('Garten 2').setLocationUrl('landshut_2').setImages(landshutImages2);
        this.locations.push(landshut2);


        // Mettenbach Garten 1
        const mettenbachImages1: ImageBildergalerie[] = [];
        mettenbachImages1.push(
            new ImageBildergalerie('1'),
            new ImageBildergalerie('2'),
            new ImageBildergalerie('3'),

            new ImageBildergalerie('1').setDeprecated(true),
            new ImageBildergalerie('2').setDeprecated(true)
        );
        const mettenbach1: LocationBildergalerie = new LocationBildergalerie()
            .setLocation('Mettenbach').setSublocation('Garten 1').setLocationUrl('mettenbach_1').setImages(mettenbachImages1);
        this.locations.push(mettenbach1);


        // Mettenbach Garten 2
        const mettenbachImages2: ImageBildergalerie[] = [];
        mettenbachImages2.push(
            new ImageBildergalerie('1'),
            new ImageBildergalerie('2'),
            new ImageBildergalerie('3'),
            new ImageBildergalerie('4')
        );
        const  mettenbach2: LocationBildergalerie = new LocationBildergalerie()
            .setLocation('Mettenbach').setSublocation('Garten 2').setLocationUrl('mettenbach_2').setImages(mettenbachImages2);
        this.locations.push(mettenbach2);


        // Mettenbach Garten 3
        const mettenbachImages3: ImageBildergalerie[] = [];
        mettenbachImages3.push(
            new ImageBildergalerie('1'),
            new ImageBildergalerie('2'),
            new ImageBildergalerie('3'),
            new ImageBildergalerie('4'),
            new ImageBildergalerie('5')
        );
        const mettenbach3: LocationBildergalerie = new LocationBildergalerie()
            .setLocation('Mettenbach').setSublocation('Garten 3').setLocationUrl('mettenbach_3').setImages(mettenbachImages3);
        this.locations.push(mettenbach3);


        // Mirskofen
        const mirskofenImages: ImageBildergalerie[] = [];
        mirskofenImages.push(
            new ImageBildergalerie('1')
        );
        const mirskofen: LocationBildergalerie = new LocationBildergalerie()
            .setLocation('Mirskofen').setLocationUrl('mirskofen').setImages(mirskofenImages);
        this.locations.push(mirskofen);


        // Unterschleissheim
        const unterschleissheimImages: ImageBildergalerie[] = [];
        unterschleissheimImages.push(
            new ImageBildergalerie('1'),
            new ImageBildergalerie('2'),
            new ImageBildergalerie('3'),
            new ImageBildergalerie('4'),
            new ImageBildergalerie('5'),

            new ImageBildergalerie('1').setDeprecated(true),
            new ImageBildergalerie('2').setDeprecated(true)
        );
        const unterschleissheim: LocationBildergalerie = new LocationBildergalerie()
            .setLocation('Unterschleissheim').setLocationUrl('unterschleissheim').setImages(unterschleissheimImages);
        this.locations.push(unterschleissheim);


        // Unterwattenbach
        const unterwattenbachImages: ImageBildergalerie[] = [];
        unterwattenbachImages.push(
            new ImageBildergalerie('1'),
            new ImageBildergalerie('2'),
            new ImageBildergalerie('3'),
            new ImageBildergalerie('4'),
            new ImageBildergalerie('5'),
            new ImageBildergalerie('6'),
            new ImageBildergalerie('7')
        );
        const unterwattenbach: LocationBildergalerie = new LocationBildergalerie()
            .setLocation('Unterwattenbach').setLocationUrl('unterwattenbach').setImages(unterwattenbachImages);
        this.locations.push(unterwattenbach);


        // Wörth an der Isar
        const wörth_an_der_isarImages: ImageBildergalerie[] = [];
        wörth_an_der_isarImages.push(
            new ImageBildergalerie('1'),
            new ImageBildergalerie('2'),
            new ImageBildergalerie('3'),
            new ImageBildergalerie('1').setDeprecated(true)
        );
        const wörth_an_der_isar: LocationBildergalerie = new LocationBildergalerie()
            .setLocation('Wörth an der Isar').setLocationUrl('wörth_an_der_isar').setImages(wörth_an_der_isarImages);
        this.locations.push(wörth_an_der_isar);
    }

    public getLocations(): LocationBildergalerie[] {
        return this.locations;
    }
}
