import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Item } from './item';

@Injectable()
export class ItemService {

  public $open = new Subject<Item>();

  constructor() { }

}
