import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ItemsService} from '../shared/model/items.service';
import { Item } from '../shared/model/item';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input()
  items: Item[];

  items$: Observable<Item[]>

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {

  this.items$ = this.itemsService.findAllItems();

  }

}
