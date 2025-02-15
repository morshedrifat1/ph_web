let age = 10;

// if(age > 18){
//     console.log("you can get nid");
// }

// else{
//     console.log("you can't");
// }

age > 18 ? console.log("you can get nid") : console.log("you can't")


let price = 500;
const student = true;

if(student === true){
    price = price * 50/100;
    console.log(price);
}

else{
    console.log("pay full");
}


price = student === true ? price * 50/100 : console.log('pay full')