import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import {Item} from 'src/app/models/items';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    private cart: Cart;

    constructor() { }

    public addItem(i: Item) {
        this.cart.add(i);
    }
}
