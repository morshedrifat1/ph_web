// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function number(num1,num2,num3,num4){
    const multiply = num1 * num2 * num3;
    return multiply;
}

const numbers = number(2,4,5);
console.log(numbers);


// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


let result;
function evenOrOdd(num){

    if(num % 2 === 0){
        result = num / 2;
        return result;
    }
    else{
        result = num * 2;
        return result;
    }
}


const num3 = evenOrOdd(5);
console.log("ans","=",num3);




// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(aryNum){
    let sum = 0;
    let aryAvg;

    for(const numIt of aryNum){
        sum=sum+numIt;
        aryAvg=sum/4
    }

    return aryAvg;
}

const ary = [5,10,15,20];
const avg = make_avg(ary);
console.log("aryAvg","=",avg);



// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

let totalZero = 0;

function count_zero(num){

   let spl = num.toString().split("");
   let deg = "0";
    for(let i = 0; i < spl.length; i++){
        if(spl[i] === deg){
            totalZero = totalZero + 1;
        }
    }

    return totalZero;

}

const binary = count_zero(10110010);
console.log("total ziro","=", binary);



// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function oddOrEven(num){
    if(num % 2 == 0){
        const even = "even";
        return even;
    }
    else{
        const odd = "odd";
        return odd;
    }
}

const num5 = oddOrEven(10);
console.log("num","=", num5);