

function getShoppintTotal(products){
    let totalPrice = 0;
    for(const item of products){
        totalPrice = totalPrice + item.price;
    }
    return totalPrice;
}


const products = [
    { name: 'shampoo',price : 300},
    { name: 'chiruni', price : 100},
    { name : 'shirt', price : 700},
    { name: 'pant', price: 1200}
];
const total = getShoppintTotal(products);
console.log("total price","=", total);