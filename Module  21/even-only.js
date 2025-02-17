function evenNumberOnly(number){
    const even = [];
    for(const num of number){
        if(num % 2 == 0){
            even.push(num);
        }
    }
    return even;
}

const arr = [4,5,6,7,8,9,10];
const numbers = evenNumberOnly(arr);
console.log(numbers);




console.log("funcition even sum -----------")



function evenNumberSum(number){
    let sum = 0;
    for(const num of number){
        if(num % 2 == 0){
            sum = sum + num;
        }
    }
    return sum;
}

const arrNum = [4,5,6,7,8,9,10];
const numberSum = evenNumberSum(arrNum);
console.log("sum","=",numberSum);
