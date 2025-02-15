
// task 1:
// -----------------------
// 1. Declare an array
// 1. Declare an array with 5 elements containing fruits
// 2. console log the 3rd index element
// 3. change the value of the 2nd index element to jambura
// 4. console log the final array

const fruits = ["apple", "banana", "oranges", "grapes", "tomato"];

console.log(fruits[3]);

fruits[2] = ("jambura");

console.log(fruits);


// task 2:
// -----------------------
//  Add or remove elements
// 1. Declare an array of 3 tourist destinations
// 2. Add a new tourist destination to your tourist array
// 3. Add two more to your array
// 4. Remove the last tourist destination you have added
// 5. display the final array as output


const place = ["Srimangal", "Sajek", "Sundarbans"];

place.push("Cox’s Bazar ");

place.push("Bandarban", "Rangamati");

place.pop();

console.log(place);


// task 3:
// -----------------------
// Checking Array Membership with 'includes'
// Instructions:
// 1. Create an array of books containing different book.
// 2. Use the includes method to check if the array contains a javascript book.
// 3. Print a message to the console indicating whether the element is present in the array or not.

const books = ["bangle", "english", "math"]

console.log(books.includes("javascript"));

books.push("javascript");

console.log(books.includes("javascript"));




// task 4:
// ----------------------
// Checking if it's an Array
// Instructions:
// 1. Create different variables, each containing either an array or a non-array value. T
// 2. Now use isArray to check if each variable is an array.
// 3. Print a message to the console indicating whether each variable is an array or not.

const fruitsName = ["apple", "banana", "oranges", "grapes", "tomato"];

const phone = [];

const stName = "Morshed Rifat";

console.log(Array.isArray(fruitsName));

console.log(Array.isArray(phone));

console.log(Array.isArray(stName));