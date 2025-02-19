function multiply(num1,num2){
    if(typeof num1 != "number" || typeof num2 != "number"){
        return "please enter a valid number";
    }
    else{
        let res = num1 * num2;
        return res;
    }
}

const result = multiply(5,"seven");
console.log(result);


// string validation 

function fullName(first,second){
    if(typeof first != "string" || typeof second != "string"){
        return "please enter valid character"
    }
    else{
        let nam = first + ' ' + second;
        return nam;
    }
}

const names = fullName("Morshed",7);
console.log(names);