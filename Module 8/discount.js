const totalAmount = 3000;

if(totalAmount > 5000){
    const discount = 30;
    const discountAmount = totalAmount / 100 * discount;
    const Payment = totalAmount - discountAmount;
    console.log("Your Total Amount After Discount --", Payment);
}
else if(totalAmount > 2000){
     const discount = 10;
    const discountAmount = totalAmount / 100 * discount;
    const Payment = totalAmount - discountAmount;
    console.log("Your Total Amount After Discount --", Payment);
}