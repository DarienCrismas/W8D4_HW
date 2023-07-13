// INTERNAL IMPORTS
import {User, Item, Shop} from "./classes"


function createUser(name:string, age:number):User{
    let newUser = new User(name, age)
    return newUser
};  

function createItem(name:string, price:number, description:string, quantity:number):Item{
    let newItem = new Item(name, price, description, quantity)
    return newItem
};



let jim = createUser("Jimmy", 23);
let pear = createItem("pear", 1.00, "peary good", 3);
let bread = createItem("bread", 5.75, "this was the yeast i could do", 2);
let corn = createItem("corn", 0.50, "im not making a corny pun", 1);

// Console logging this so typescript won't yell at me for not using him
console.log(jim)


let jimShop = new Shop(pear, bread, corn)
console.log(jimShop.allItems)
jim.addToCart(pear, bread, corn)
jim.printCart()
jim.removeFromCart(pear)
jim.removeQuantityFromCart(bread, 1)
jim.printCart()

