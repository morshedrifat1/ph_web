const school = "Dagonbhuiyan Academy";

console.log(school.toUpperCase());


const sub = "bangla";

const sub1 = "Bangla  ";



if(sub ==  sub1.toLowerCase()){
    console.log("fine");
}

else{
    console.log("not fine");
}


const drink = "water";
const liquid = "water    ";

if(drink === liquid.trim()){   //trim() remove white space from liquid variable
    console.log("drinkable");
}

else{
    console.log("not drinkable");
}