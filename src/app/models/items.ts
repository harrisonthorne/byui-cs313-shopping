export class Item {
    constructor(public name: string, public price: number, public imgName: string) { }
}

export const ChocolateItem = new Item('chocolate', 3.99, 'chocolate.png');
export const DarkChocolateItem = new Item('dark chocolate', 4.99, 'dark_chocolate.png');
export const Watch = new Item('watch', 49.99, 'watch.png');
export const ChocolateWatch = new Item('chocolate watch', 149.99, 'chocolate_watch.png');
export const PumpkinDrink = new Item('pumpkin drink (very in-season)', 249.99, 'pumpkin_drink.png');

export const MainItems: Item[] = [
    ChocolateItem,
    DarkChocolateItem,
    Watch,
    ChocolateWatch,
    PumpkinDrink
];
