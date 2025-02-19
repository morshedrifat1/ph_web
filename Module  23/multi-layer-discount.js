function layerDiscount(quantity){
    const first100 = 100;
    const second100 = 90;
    const other = 70;
    let total;

    if(quantity <= 100){
        total = quantity * first100;
        return total;
    }
    else if(quantity <= 200){
        let otherQty = quantity - 100;

        total = (100 * first100) + (otherQty * 90);
        return total;
    }
    else{
        let otherQty = quantity - 200;
        total = (100 * first100) + (100 * second100) + (otherQty * 70);
        return total;
    }
}


const qty = layerDiscount(10000);
console.log(qty);