const person = {
    name:"rifat",
    age: 21,
    profession: "developer",
    salary: 10000
}

person.salary=20000; //object value change

person["age"] = 25; //object value change

// console.log(person) 
console.log(person.name); // 1st way

const income = person.salary; // 2nd way
console.log(income);

const boyos = person["age"]; // 3rd way
console.log(boyos); // or

console.log(person["profession"])

// another way Object console.log
const keyAge = "age";
console.log(person[keyAge]);