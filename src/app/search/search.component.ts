import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/model/item';
import { ItemsService } from '../shared/model/items.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  allItems: Item[];
  filtered: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {

    this.itemsService.findAllItems()
        .do(console.log)
        .subscribe(
          items => this.allItems = this.filtered = items
        )

    }

    search(search:string) {

        this.filtered = this.allItems.filter(item => item.description.includes(search));

    }
}
