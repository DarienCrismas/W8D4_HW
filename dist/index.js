"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// INTERNAL IMPORTS
const classes_1 = require("./classes");
function createUser(name, age) {
    let newUser = new classes_1.User(name, age);
    return newUser;
}
;
function createItem(name, price, description, quantity) {
    let newItem = new classes_1.Item(name, price, description, quantity);
    return newItem;
}
;
let jim = createUser("Jimmy", 23);
let pear = createItem("pear", 1.00, "peary good", 3);
let bread = createItem("bread", 5.75, "this was the yeast i could do", 2);
let corn = createItem("corn", 0.50, "im not making a corny pun", 1);
// let apple = createItem("apple", 1.50, "sure did apple-y myself for this homework", 5);
// Console logging this so typescript won't yell at me for not using him
console.log(jim);
let jimShop = new classes_1.Shop(pear, bread, corn);
console.log(jimShop.allItems);
jim.addToCart(pear, bread, corn);
jim.printCart();
jim.removeFromCart(pear);
jim.removeQuantityFromCart(bread, 1);
jim.printCart();
