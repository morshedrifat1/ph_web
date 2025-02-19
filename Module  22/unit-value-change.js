// 12 inch 1 feet 

function inchTofeet(inc){
    const feet = inc / 12;
    const roundDig = parseInt(feet);
    const float = inc % 12;
    const feetInch = roundDig + " feet " + float + " inch";
    return feetInch;
}

const inch = inchTofeet(70);
console.log(inch);




// mile to kilometer

function mileToKilometer(mile){
    const kilo = (mile * 1.60936);
    return kilo;
}

const kilometer = mileToKilometer(20);
console.log(kilometer);