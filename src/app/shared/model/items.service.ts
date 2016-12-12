import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Item} from "./item";

@Injectable()

export class ItemsService { 

    constructor(private db:AngularFireDatabase) {
    }

     findAllItems():Observable<Item[]> {
        return this.db.list('items').map(Item.fromJsonArray);
    }

}