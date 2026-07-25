function calculatePrice (price, discount){
    const discountPrice = (discount * price) / 100;
    const priceAfterDiscount = (price - discountPrice);
    return priceAfterDiscount
}

let product1 = calculatePrice(20, 15)
console.log(product1 , 'discount price of  1');

let product2 = calculatePrice(200, 25)
console.log(product2, 'discount price of  2');