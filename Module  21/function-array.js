
// sum using function and array 

function somOfNumber(ary){
    console.log(ary);
    let su = 0;
    for(const numItem of ary){
        su = su + numItem;
    }
    return su;
}
const num = [10,11,12]
const sum = somOfNumber(num);
console.log("sum of number is",sum)