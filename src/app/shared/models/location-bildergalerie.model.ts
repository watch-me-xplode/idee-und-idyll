import { ImageBildergalerie } from "./image-bildergalerie.model";

export class LocationBildergalerie {
    private location: string;
    private sublocation: string;
    private locationUrl: string;
    private images: ImageBildergalerie[] = [];
    private deprecatedImages: ImageBildergalerie[] = [];
    private visibleImagesAmount: number;
    private visibleDeprecatedImagesAmount: number;

    public constructor () {
        this.visibleImagesAmount = 0;
        this.visibleDeprecatedImagesAmount = 0;
    }

    public getLocation(): string { return this.location; }
    public getSublocation(): string { return this.sublocation; }
    public getLocationUrl(): string { return this.locationUrl; }
    public getImages(): ImageBildergalerie[] { return this.images.slice(0, this.visibleImagesAmount); }
    public getDeprecatedImages(): ImageBildergalerie[] { return this.deprecatedImages.slice(0, this.visibleDeprecatedImagesAmount); }

    public setLocation(location: string): LocationBildergalerie { this.location = location; return this; }
    public setSublocation(sublocation: string): LocationBildergalerie { this.sublocation = sublocation; return this; }
    public setLocationUrl(location: string): LocationBildergalerie { this.locationUrl = location; return this; }
    public setImages(images: ImageBildergalerie[]): LocationBildergalerie {
        images.forEach(image => {
            if (image.isDeprecated()) {
                this.deprecatedImages.push(image);
            } else {
                this.images.push(image);
            }
        });
        return this;
    }
    public getHiddenImagesAmount(): number { return this.images.length - this.visibleImagesAmount; }
    public toggleImages(): void {
        if (this.visibleImagesAmount === 0) {
            this.visibleImagesAmount += 3; 
        } else {
            this.visibleImagesAmount = 0;
        }
    }
    public showMoreImages(): void { this.visibleImagesAmount += 3; }
    public toggleDeprecatedImages(): void {
        if (this.visibleDeprecatedImagesAmount === 0) {
            this.visibleDeprecatedImagesAmount = this.deprecatedImages.length; 
        } else {
            this.visibleDeprecatedImagesAmount = 0;
        }
    }
    public hasDeprecatedImages(): boolean { return this.deprecatedImages.length > 0; }
}