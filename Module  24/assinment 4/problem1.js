function cashOut(money) {
    if (typeof money != "number" || money < 0) {
        return "Invalid";
    }
    else {
        let cashOutCharge = money * 0.0175;
        return cashOutCharge;
    }


}


const amount = cashOut("mewauu");
console.log(amount);