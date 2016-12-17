import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ItemsService } from '../shared/model/items.service';
import { Item } from '../shared/model/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input()

  item: Item;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private itemsService: ItemsService) { }

  ngOnInit() {

    this.route.params.switchMap(params => {
            const $key = params['id'];
            return this.itemsService.findItemByKey($key);
        })
        .subscribe(item => this.item = item);
  }

}
