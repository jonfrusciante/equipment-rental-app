import {Observable} from "rxjs/Rx";

export class Item {

    constructor(
        public $key:string,
        public address:string,
        public cost:string,
        public description:string,
        public eMail:string,
        public longDescription: string,
        public phoneNumber:string,
        public photoUrl:string,
        public postalCode:string,
        public tags:string,
        public town:string,) {

    }

    static fromJson({$key, address, cost, description, eMail, longDescription, phoneNumber, photoUrl, postalCode, tags,
        town}) {
        return new Item($key, address, cost, description, eMail, longDescription, phoneNumber, photoUrl, postalCode, tags,
        town);
    }

    static fromJsonArray(json : any[]) : Item[] {
        return json.map(Item.fromJson);
    }


}