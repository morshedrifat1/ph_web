function double(number){   //(number)  hocca peramiter
    const doub = number * 2;
    console.log(number,"*",2,"=",doub);
}

double(5); //(5) funcition er call korer por set kora value arguments
console.log("------------");
double(10);
console.log("------------");
double(50);

console.log('diffeneence ------------------------------');

function difference(num1,num2){
    const diff = num1 - num2;
    console.log(num1,"-",num2,"=",diff);
}

const fatherAge = 50;
const myAge = 21;
difference(fatherAge,myAge);