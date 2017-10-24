import { Injectable } from '@angular/core';

import { GbEntry } from '../models/gb-entry.model';

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
        const entry1 = new GbEntry();
        entry1.setContent('Frau Wohlgemuth von Idee & Idyll hat im Jahr 2015 mit viel Gespür, gutem Einfühlungsvermögen, großer  Erfahrung, hervorragender Kompetenz im grünen Bereich und unendlicher Liebe zum Gestalten mit der Natur eine nach unseren Wünschen und Vorstellungen individuelle Gartenumgestaltung geplant.')
            .setContent('Für die Planung und Begleitung bei der Umsetzung von ganz persönlichen Gartenträumen  können wir sie wärmstens weiterempfehlen.')
            .setAuthor('Familie Schramek')
            .setLocation('Landshut');
        this.entries.push(entry1);

        const entry2 = new GbEntry();
        entry2.setContent('Als junge Bauherren hatten wir nicht viel Ahnung davon, wie man einen Garten anlegt. Daher hatten wir uns im Jahr 2013, aufgrund von Empfehlungen, an Frau Wohlgemuth gewandt. Sie hat uns einen wunderschönen Plan gezeichnet und uns damit tolle Ideen zur Gartengestaltung gegeben. Auch bei bei der richtigen Auswahl der Pflanzen und deren sinnvollen Anordnung im Garten hat Frau Wohlgemuth uns kompetent beraten und geholfen.')
            .setContent('So ist mit ihrer Hilfe ein toller Garten entstanden, in dem alles wunderbar aufeinander abgestimmt ist. Vor allem ist er etwas Besonderes geworden und kein Standartgarten. Wir und die Kinder fühlen uns darin sehr wohl.')
            .setContent('Frau Wohlgemuth steht uns auch jetzt noch bei Fragen zur weiteren Ausgestaltung des Gartens oder zu den Pflanzen immer wieder mit Rat und Tat zur Seite, was wir an ihrer Arbeit sehr schätzen.')
            .setAuthor('Familie Krämer')
            .setLocation('Mirskofen');
        this.entries.push(entry2);
        
        const entry3 = new GbEntry();
        entry3.setContent('Liebe Andrea,')
            .setContent('vielen Dank für deine tollen Ideen die du in unserem Garten verwirklicht hast. Du hast es geschafft unsere Wünsche mit deinem Wissen in die Realität umzusetzen. Wir genießen den Garten in vollen Zügen. Du bist ein gern gesehener Gast in unserem Stadtidyll. Bei Fragen bist du stets zur Stelle und wenn es sein muss auch mit deiner flinken Gartenschere.')
            .setContent('Ich wünsche dir weiterhin tolle Ideen.')
            .setAuthor('Familie Holzner')
            .setLocation('Freyung, Landshut');
        this.entries.push(entry3);
        
        const entry4 = new GbEntry();
        entry4.setContent('Liebe Frau Wohlgemuth,')
            .setContent('vielen Dank für die wunderschönen, farbenprächtigen Momente, die wir dieses Jahr den ganzen Sommer über genießen durften. Angefangen von der Morgenstimmung auf der Terrasse, über die Pflanzenvielfalt und dem Blütenreichtum, der sich nach und nach zeigte.')
            .setContent('Wir sind begeistert von dem neuen Leben das in unserem Garten erwacht ist.')
            .setContent('Wir haben viel Freude damit und fühlen uns rundum wohl.')
            .setContent('Ihre ideenreiche harmonische Planung, Ihre einfühlsame Art und fachkundige Beratung, sowie die pflanztechnische Umsetzung haben uns überzeugt.')
            .setContent('Sehr positiv empfinden wir es auch, dass Sie jederzeit für Fragen  ansprechbar waren und sind, telefonisch, wie vor Ort - und dass wir uns, nach wie vor in sehr guten Händen wissen. Das ist Dienstleistung so wie man sie sich wünscht.')
            .setAuthor('Familie Popp')
            .setLocation('Lohhof, Unterschleissheim');
        this.entries.push(entry4);
    }
}