"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = exports.Item = exports.User = void 0;
// EXTERNAL IMPORTS
const uuid_1 = require("uuid");
class User {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        this._cart = [];
        this._id = (0, uuid_1.v4)();
    }
    ;
    // begin getter/setter montage
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    // end montage
    addToCart(...item) {
        this.cart = this.cart.concat(item);
    }
    ;
    removeFromCart(item) {
        this.cart.forEach((name, i) => {
            if (name === item)
                this.cart.splice(i, 1);
        });
    }
    ;
    removeQuantityFromCart(item, remove) {
        if (remove <= item.quantity) {
            item.quantity -= remove;
        }
        else {
            console.log("That's more than you have!");
        }
        ;
    }
    ;
    cartTotal() {
        let total = 0;
        for (let item of this.cart) {
            total += item.price;
        }
        ;
        return total;
    }
    ;
    printCart() {
        if (this.cart.length > 0) {
            console.log(this.cart);
        }
        else {
            console.log("You have nothing in your cart.");
        }
        ;
    }
    ;
}
exports.User = User;
;
class Item {
    constructor(_name, _price, _description, _quantity) {
        this._name = _name;
        this._price = _price;
        this._description = _description;
        this._quantity = _quantity;
        this._id = (0, uuid_1.v4)();
    }
    ;
    get id() {
        return this._id;
    }
    ;
    get name() {
        return this._name;
    }
    ;
    set name(newName) {
        this.name = newName;
    }
    ;
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(value) {
        this._quantity = value;
    }
}
exports.Item = Item;
;
class Shop {
    constructor(_item1, _item2, _item3) {
        this._item1 = _item1;
        this._item2 = _item2;
        this._item3 = _item3;
        this._allItems = [];
        this._allItems = [this._item1, this._item2, this._item3];
    }
    ;
    set item1(newItem) {
        this._item1 = newItem;
    }
    ;
    set item2(newItem) {
        this._item1 = newItem;
    }
    ;
    set item3(newItem) {
        this._item1 = newItem;
    }
    ;
    get allItems() {
        return this._allItems;
    }
    ;
}
exports.Shop = Shop;
;
