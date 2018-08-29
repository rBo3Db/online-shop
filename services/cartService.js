// import  MainModel  from "../src/models/main-model";

export default class Cart  {
    constructor(){
        this.products = [];
        this.totalPrice = 0;
    }
    
    add(productData , i , j, numberOfPurchas) {
    //    let numberOfPurchases = +$(numberOfPurchas).val() || 1;
    //     productData[0].numberOfPurchases = numberOfPurchases;
        this.products.push(productData[0]);
        console.log(this.products);
    }

    // remove() {
    //     for (var i = 0; i < cart.products.length; i++) {
    //         if (this.id == cart.products[i].id) {
    //             cart.products = _.pull(cart.products, cart.products[i]);
    //             cart.sum();
    //             if (totalPrice == 0) {
    //                 openEmptyBasketPage();
    //                 return;
    //             }
    //             pageContent.html(templates.cartPage);
    //         }
    //     }
    // }
    // sum() {
    //     totalPrice = 0;
    //     cart.products.forEach(function(item, i) {
    //         totalPrice = totalPrice + (cart.products[i].price * cart.products[i].numberOfPurchases);
    //     });
    // }
};