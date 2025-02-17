function evenSize(str){           //string
    const size = str.length;
    console.log(size)
    if(size % 2 == 0){
        console.log("even size");
        return true;
    }
    else{
        console.log("odd size");
        return false
    }

}

evenSize("MorshedRifat");


console.log("---------------") //boolean


function doubleOrTriple(number,double){
    if(double == true){
        const resD = number * 2;
        return resD;
    }
    else{
        const resT = number * 3;
        return resT;
    }
}

const val = doubleOrTriple(5,true);

console.log(val);



console.log("---------------") //array


function numOfElements(num){
    const len = num.length;
    return len;
}

const ary = numOfElements([10,20,30,40,50]);

console.log(ary);