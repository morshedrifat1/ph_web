let burger = 300;

if(burger >= 300){
    console.log("coke free with burger");
}

else{
    console.log("coke price 30 tk extra");
}

// ==========bmi caculator===========

let weight = 70;
let height = 1.6764;
let bmi = weight / Math.pow(height,2);

if(bmi < 18.5){
    console.log("you are under weight");
}

else if((bmi >= 18.5) || (bmi <= 24.9)){
    console.log("you are normal");
}

else if((bmi >= 25) || (bmi <= 29.9)){
    console.log("you are overweight");
}

else{
    console.log("you are obese");
}

// grade calculator

let bangla = 80;

if(bangla >= 90 || bangla <= 79 ){
    console.log("you got A");
}

else if(bangla >= 80 || bangla <= 89 ){
    console.log("you got b");
}


else if(bangla >= 70 || bangla <= 79 ){
    console.log("you got d");
}

else{
    console.log("you got f");
}