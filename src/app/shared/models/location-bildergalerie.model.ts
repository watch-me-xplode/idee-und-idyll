import { ImageBildergalerie } from "./image-bildergalerie.model";

export class LocationBildergalerie {
    private location: string;
    private allImages: ImageBildergalerie[] = [];
    private visibleImagesAmount: number;

    public constructor () {
        this.visibleImagesAmount = 0;
    }

    public getLocation(): string { return this.location; }
    public getImages(): ImageBildergalerie[] { return this.allImages; }
    public getVisibleImagesAmount(): number { return this.visibleImagesAmount; }

    public setLocation(location: string): LocationBildergalerie { this.location = location; return this; }
    public setImages(images: ImageBildergalerie[]): LocationBildergalerie { this.allImages = images; return this; }
    public hideImages(): void { this.visibleImagesAmount = 0; }
    public showImages(): void {
        if (this.visibleImagesAmount === 0) {
            this.visibleImagesAmount += 5; 
        } else {
            this.visibleImagesAmount = 0;
        }
    }
    public showMoreImages(): void { this.visibleImagesAmount += 5; }
}