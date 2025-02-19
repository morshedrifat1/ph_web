function discountPrice(quantity){
    let price = 0;
    if(quantity <= 100){
        price = quantity * 100;
        return price;
    }
    else if(quantity <= 200){
        price = quantity * 90;
        return price;
    }
    else{
        price =quantity * 70;
        return price;
    }
}

const qty = discountPrice(200);
console.log("total:", qty);