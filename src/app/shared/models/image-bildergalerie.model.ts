import { ImagetagBildergalerie } from "../enums/imagetag-bildergalerie.enum";

export class ImageBildergalerie {
    private label: string;
    private old: boolean;
    private tags: ImagetagBildergalerie[] = [];

    public constructor (label: string) {
        this.label = label;
        this.old = false;
    }

    public getLabel(): string { return this.label; }
    public isDeprecated(): boolean { return this.old; }
    public getTags(): ImagetagBildergalerie[] { return this.tags; }
    public hasTags(searchedTags: ImagetagBildergalerie[]): boolean {
        searchedTags.forEach((searchedTag: ImagetagBildergalerie) => {
            if (this.tags.find(imageTag => imageTag === searchedTag) == null) {
                return false;
            }
        });
        return false;
    }

    public setDeprecated(old: boolean): ImageBildergalerie { this.old = old; return this; }
    public setTags(tags: ImagetagBildergalerie[]): ImageBildergalerie { this.tags = tags; return this; }
    public addTag(tag: ImagetagBildergalerie): ImageBildergalerie { this.tags.push(tag); return this; }
}