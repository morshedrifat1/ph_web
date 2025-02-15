for(let i = 1; i <= 30; i++){
    if(i%5==0){
        console.log(i);
    }
}

let num = 1;
let sum = 0;
while(num<=30){
    if(num%5==0){
        sum = sum + num;
        console.log("sum",sum);
    }
    num++;
}

console.log(sum);

