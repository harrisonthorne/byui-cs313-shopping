import { Component, OnInit } from '@angular/core';
import { MainItems } from 'src/app/models/items';

@Component({
    selector: 'app-browse-items',
    templateUrl: './browse-items.component.html',
    styleUrls: ['./browse-items.component.styl']
})
export class BrowseItemsComponent implements OnInit {

    public mainItems: typeof MainItems = MainItems;

    constructor() { }

    ngOnInit() {

    }

    addToCart(item) {

    }

}
