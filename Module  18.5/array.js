// array syntax
let number = [30, 32, 33,]; 

// array items length
console.log(number.length);

console.log(number[1]);

number[2] = 90;

console.log(number);


// array items push 

let pNumber = [11, 12, 13, 14, 15];

pNumber.push(21);
pNumber.push(31);

console.log(pNumber);


// array item pop


let student = [22, 32, 42, 52];

student.pop();

console.log(student);


//array incudes method

let fruits = ["apples", "oranges", "banana"];

console.log(fruits);

console.log(fruits.includes("apples"));

console.log(fruits.includes("orange"));

if(fruits.includes("oranges")){
    console.log("fruits is available");
}
else{
    console.log("not available");
}