

function getShoppintTotal(products){
    let totalPrice = 0;
    for(const item of products){
        totalPrice = totalPrice + (item.price * item.quantity);
    }
    return totalPrice;
}


const products = [
    { name: 'shampoo',price : 300, quantity: 2},
    { name: 'chiruni', price : 100, quantity: 3},
    { name : 'shirt', price : 700, quantity: 5},
    { name: 'pant', price: 1200, quantity: 1}
];
const total = getShoppintTotal(products);
console.log("total price","=", total);