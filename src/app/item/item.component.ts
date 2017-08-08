import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {

  @Input() item: Item;
  private itemSubscription: Subscription;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemSubscription = this.itemService.$open.subscribe((item: Item) => {
      this.item.isOpen = item.title === this.item.title;
    })
  }

  ngOnDestroy() {
    if (this.itemSubscription) {
      this.itemSubscription.unsubscribe();
    }
  }

  open() {
    this.itemService.$open.next(this.item);
  }
}
