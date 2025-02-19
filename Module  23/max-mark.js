function maxMark(Rifat,shakib,tahsin){
    if(Rifat > shakib && Rifat > tahsin ){
        return "Rifat get max number"
    }
    else if(shakib > Rifat && shakib > tahsin){
        return "Shakib get max number"
    }
    else{
        return "tahsin get max number"
    }
}

const marks = maxMark(20,10,5);
console.log(marks);