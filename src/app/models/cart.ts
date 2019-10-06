import { Item } from './items';

export class Cart {
    public items: CartItem[];

    constructor() {}

    public getTotal(): number {
        let total = 0;
        this.items.forEach((cartItem: CartItem) => {
            total += cartItem.getTotal();
        });

        return total;
    }

    public add(i: Item): void {
        throw new Error('Method not implemented.');
    }

    public remove(uuid: string): void {

    }
}

export class CartItem {

    private uuid: string;
    public get id(): string {
        return this.uuid;
    }

    public quantity: number;

    constructor(public is: Item) {}

    public getTotal(): number {
        return this.quantity * this.is.price;
    }
}
