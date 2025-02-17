function doMath(num1,num2){
    const sum = num1 + num2;
    const difference = num1 - num2;
    const multiply = sum * difference;
    const result = multiply / 2;
    return result;
}

const res = doMath(10,5);
console.log(res);


// even number check using function 

function isEven(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const chk = isEven(10);
console.log(chk);



// odd number check using function 


function isOdd(num){
    if(num % 2 != 0){
        return true;
    }
        return false;
}

const chkOdd = isOdd(11);
console.log(chkOdd);