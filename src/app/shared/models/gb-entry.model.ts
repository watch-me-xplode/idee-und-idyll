export class GbEntry {
    private content: string;
    private author: string;
    private location: string;

    constructor() { }

    public getContent(): string { return this.content; }
    public getAuthor(): string { return this.author; }
    public getLocation(): string { return this.location; }

    public setContent(content: string): GbEntry { this.content = content; return this; }
    public setAuthor(author: string): GbEntry { this.author = author; return this; }
    public setLocation(location: string): GbEntry { this.location = location; return this; }
}