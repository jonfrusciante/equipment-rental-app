import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ItemsService} from '../shared/model/items.service';
import { Item } from '../shared/model/item';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items$: Observable<Item[]>;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {

    this.items$ = this.itemsService.findAllItems();

  }

}
