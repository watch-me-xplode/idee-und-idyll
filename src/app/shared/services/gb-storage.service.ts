import { Injectable } from "@angular/core";

import { GbEntry } from "../models/gb-entry.model";

@Injectable()
export class GbStorage {
    private entries: GbEntry[] = [];

    constructor() {
        this.createEntries();
    }

    public getEntries(): GbEntry[] {
        return this.entries;
    }

    private createEntries(): void {
        let entry: GbEntry;
        entry = new GbEntry();
        entry.setContent("Frau Wohlgemuth von Idee & Idyll  hat im Jahr 2015 mit viel Gespür, gutem Einfühlungsvermögen, großer  Erfahrung, hervorragender Kompetenz im grünen Bereich und unendlicher Liebe zum Gestalten mit der Natur eine nach unseren Wünschen und Vorstellungen individuelle Gartenumgestaltung geplant. Für die Planung und Begleitung bei der Umsetzung von ganz persönlichen Gartenträumen  können wir sie wärmstens weiterempfehlen.")
            .setAuthor("Familie Schramek")
            .setLocation("Landshut");
        this.entries.push(entry);
    }
}