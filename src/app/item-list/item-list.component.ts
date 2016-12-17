import { Component, OnInit, Input} from '@angular/core';
import { Item } from '../shared/model/item';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input()
  items: Item[];


  constructor() { }

  ngOnInit() {
  }

}
