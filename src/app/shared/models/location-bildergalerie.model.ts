import { ImageBildergalerie } from "./image-bildergalerie.model";

export class LocationBildergalerie {
    private location: string;
    private backgroundimageName: string;
    private images: ImageBildergalerie[] = [];
    private deprecatedImages: ImageBildergalerie[] = [];
    private visibleImagesAmount: number;
    private visibleDeprecatedImagesAmount: number;

    public constructor () {
        this.visibleImagesAmount = 0;
        this.visibleDeprecatedImagesAmount = 0;
    }

    public getLocation(): string { return this.location; }
    public getImageName(): string { return this.backgroundimageName; }
    public getImages(): ImageBildergalerie[] { return this.images.slice(0, this.visibleImagesAmount); }
    public getDeprecatedImages(): ImageBildergalerie[] { return this.deprecatedImages.slice(0, this.visibleDeprecatedImagesAmount); }

    public setLocation(location: string): LocationBildergalerie { this.location = location; return this; }
    public setImageName(name: string): LocationBildergalerie { this.backgroundimageName = name; return this; }
    public setImages(images: ImageBildergalerie[]): LocationBildergalerie { this.images = images; return this; }
    public getHiddenImagesAmount(): number { return this.images.length - this.visibleImagesAmount; }
    public setDeprecatedImages(images: ImageBildergalerie[]): LocationBildergalerie { this.deprecatedImages = images; return this; }
    public toggleImages(): void {
        if (this.visibleImagesAmount === 0) {
            this.visibleImagesAmount += 1; 
        } else {
            this.visibleImagesAmount = 0;
        }
    }
    public showMoreImages(): void { this.visibleImagesAmount += 1; }
    public toggleDeprecatedImages(): void {
        if (this.visibleDeprecatedImagesAmount === 0) {
            this.visibleDeprecatedImagesAmount = this.deprecatedImages.length; 
        } else {
            this.visibleDeprecatedImagesAmount = 0;
        }
    }
    public hasDeprecatedImages(): boolean { return this.deprecatedImages.length > 0; }
}