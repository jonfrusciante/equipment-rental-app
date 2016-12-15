import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Item } from '../shared/model/item';
import { ISearchItem } from '../shared/model/searchItem';
import { ItemsService } from '../shared/model/items.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() items: Item[];
  @Output() listChange: EventEmitter<Item[]> = new EventEmitter<Item[]>();
  public myForm: FormGroup;
  public submitted: boolean;
  public event: any[] = [];
  allItems: Item[];
  filtered: Item[];

  constructor(private itemsService: ItemsService, private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.itemsService.findAllItems()
      .do(console.log)
      .subscribe(
      items => this.allItems = this.filtered = items
      )

    this.myForm = this.formBuilder.group({
        description: new FormControl(''),
        cost: new FormControl('')
      })
  }

  search(model: ISearchItem) {

    this.itemsService.getItemsByFilter(model.description, model.cost)
        .do(console.log)
        .subscribe(items => this.filtered = items)
    this.listChange.emit(this.items);
    this.submitted = true;
    return false;
  }
}
