// Task -1:
// Find the lowest number in the array below.


function lowestNum(numAry){
    let lowest = numAry[0];
    for(const num of numAry){
        if(num < lowest){
            lowest = num;
        }
    }
    return lowest;
}

const heights2 = lowestNum([167, 190, 120, 165, 137,50]);
console.log(heights2);



// Task -2:
// Find the friend with the smallest name.


function smallName(namAry){
    let smallestName = namAry[0];
    for(const names of namAry){
        if(names.length < smallestName.length){
            smallestName = names;
        }
    }
    return smallestName;
}
const names = smallName(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
console.log(names);