import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Item } from '../shared/model/item';
import { ItemsService } from '../shared/model/items.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() 
  items: Item[];
  @Output() 
  listChange: EventEmitter<Item[]> = new EventEmitter<Item[]>();

  public form: FormGroup;
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
      );

    this.form = this.formBuilder.group({
        description: new FormControl(''),
        cost: new FormControl('')
      });
  }

  search(description:string, cost:string){
    this.itemsService.getItemsByFilter(description,cost)
    .do(console.log)
    .subscribe(items => this.filtered)
    this.listChange.emit(this.filtered);
    this.submitted = true;
  }
}
