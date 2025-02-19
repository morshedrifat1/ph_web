let a = 5;
let b = 7;

const temp = a; //temp = 5;

a = b;
b = temp;


console.log(a,b);

let x = 10;
let y = 20;

[x,y] = [y,x]

console.log(x,y);