// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let revCol = [];

for(let i = 0; i < colors.length; i++){
    
    revCol.unshift(colors[i])
}

console.log(revCol);


// Write a JavaScript code to get the even numbers from an array using any looping technique.

const num = [12, 98, 5, 41, 23, 78, 46];
let evNum = [];
for(let i = 0; i < num.length; i++ ){

    if(num[i] % 2 == 0){
        evNum.push(num[i]);
    }
}
console.log(evNum);

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let numJoin = numbers.join("");
console.log(numJoin);




// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person';

const strAry = statement.split(" ");

console.log(strAry);

const str_ary_rev = strAry.reverse().join(" ");
console.log(str_ary_rev);