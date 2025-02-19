// Find the cheapest phone from an array of phone objects

function getMin(num){
    let chipPrice = num[0];
    for(let i = 0; i < num.length; i++){
        if(num[i] < chipPrice){
            chipPrice = num[i]
        }
    }
    return chipPrice;
}

const prices = getMin([ 20000, 16000, 50000, 100000, 12000, 30000, 35000]);

console.log("chip price","=",prices);
