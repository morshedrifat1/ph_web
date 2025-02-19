function calculateTax(income, expenses) {

    if(typeof income != "number" || typeof expenses != "number" || income < expenses || income < 0 || expenses < 0){
        return "Invalid Input"
    }
    else{
        let taxAbleAmount = income - expenses;
        let tax = taxAbleAmount * 0.2;
        return tax;
    }

}


let calculate = calculateTax(6000, -1500);
console.log(calculate);