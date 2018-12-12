export class Gemeente {
    deelgemeente: string;
    fusiegemeente: string;
    postcode: string;
    postnummer: string;
    NISCode: string;
    ID: number;
    land: number;
    RecordType: string;

    getDeelgemeente() : string {
        return this.deelgemeente;
    }
}