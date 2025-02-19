// odd average value

function oddAvg(num){
    let oddSum = 0;
    let oddNu = 0;
    let oddAvg;
    for(let oddItm of num){
        if(oddItm % 2 != 0){
            oddNu++
            oddSum = oddSum + oddItm;
            oddAvg = oddSum / oddNu;
        }
    }
    return oddAvg;
}

const numAry = oddAvg([42,13,58,65,81,96,7,7]);
console.log("average of the odd numbers is :", numAry);