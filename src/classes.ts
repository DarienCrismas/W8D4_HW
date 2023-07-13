// EXTERNAL IMPORTS
import { v4 as uuidv4 } from "uuid"

export class User{
    
    private _cart: Item[] = [];
    private _id = uuidv4();
    constructor(private _name: string, private _age: number){};

    // begin getter/setter montage
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }

    public get id() {
        return this._id;
    }
    public set id(value) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    // end montage

    addToCart(...item:Item[]):void{
        this.cart = this.cart.concat(item)
    };  
    

    removeFromCart(item:Item):void{
        this.cart.forEach((name, i) => {
            if(name === item) this.cart.splice(i,1);
          });
    };
    

    removeQuantityFromCart(item:Item, remove:number):void{
        if (remove <= item.quantity){
            item.quantity -= remove;
        }else{
            console.log("That's more than you have!");
        };
    };
    
    cartTotal():number{
        let total = 0;
        for (let item of this.cart){
            total += item.price
        };
        return total
    };
    
    printCart():void{
        if (this.cart.length > 0){
            console.log(this.cart);
        }else{
            console.log("You have nothing in your cart.")
        };
    };
};


export class Item{
    
    private _id = uuidv4()
    constructor(private _name:string, private _price: number, private _description: string, private _quantity: number){};

    public get id():string{
        return this._id;
    };

    public get name():string{
        return this._name;
    };
    public set name(newName:string){
        this.name = newName;
    };
    
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }
    

};


export class Shop{

    private _allItems: Item[] = []
    constructor(private _item1: Item, private _item2: Item, private _item3: Item){
        this._allItems = [this._item1, this._item2, this._item3]
    };

    public set item1(newItem:Item){
        this._item1 = newItem;
    };
    public set item2(newItem:Item){
        this._item1 = newItem;
    };
    public set item3(newItem:Item){
        this._item1 = newItem;
    };

    public get allItems():Item[]{
        return this._allItems;
    };
};