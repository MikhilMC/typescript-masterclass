"use strict";
/*
 * in Operator narrowing
 */
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Electronics extends Product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }
    getPrice() {
        return this.price;
    }
}
class Clothing extends Product {
    constructor(name, price, size, material) {
        super(name, price);
        this.size = size;
        this.material = material;
    }
    getPrice() {
        return this.price;
    }
}
function displayDetails(product) {
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    if (product instanceof Electronics) {
        console.log(`Warranty: ${product.warranty}`);
    }
    else if (product instanceof Clothing) {
        console.log(`Size: ${product.size}`);
        console.log(`Material: ${product.material}`);
    }
}
