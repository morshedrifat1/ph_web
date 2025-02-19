// leap year simple logic

function leapYear(num){
    if(num % 4 == 0){
        return "this is leapYear";
    }
    else{
        return "this is not leapYear";
    }

}

const year = leapYear(1921);
console.log(year);