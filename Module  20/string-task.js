// Task-1:
// Count how many times a string has the letter a

let names = "Morshed Al Muktadir Rifat";
let latter = ["a","A"];
let count_a = 0;
let count_A = 0;

for(let leng = 0; leng <= names.length; leng++){
    if(names[leng] == latter[0]){
        count_a++;
    }
}
console.log(count_a);

for(let leng = 0; leng <= names.length; leng++){
    if(names[leng] == latter[1]){
        count_A++;
    }
}

console.log(count_A);



// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

const str = "morshed rifat";
const vowels = "aeiou";
for(let i = 0; i < vowels.length ; i++){
    let vowel = vowels[i];
    console.log(vowel,"=",str.includes(vowel));
}


// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let strRep = "eXample teXt"

let rep = strRep.replace("x","y").replace("X","Y");

console.log(rep);