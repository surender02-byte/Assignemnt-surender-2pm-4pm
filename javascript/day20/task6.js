// Create a class Product with name and price, and a method discountedPrice().

class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
     discountedPrice(){
        let discounts = this.price * 0.10;
        let finalPrice = this.price - discounts;
        console.log(`discounted prize: ${finalPrice}`);
        
    }
}
const p1 = new Product ('sure',1000);
p1. discountedPrice();

