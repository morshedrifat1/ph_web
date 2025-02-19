// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function fToC(tem){
    const Celsius = ((tem - 32) / 9) * 5;
    return Celsius;
}

const temperatureF = fToC(120);
console.log(temperatureF);


// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.





// Task-3:
// Write a function to count the number of vowels in a string.

function vow(str,vowels){
    let count = 0;
    for(let i = 0; i < str.length; i++ ){
        let string = str[i];
        if(vowels.includes(string) == true){
            count++
        }
    }
    return count;
}

const string = vow("morshed al muktadir rifat","aeiou");
console.log(string);



// Task-4:
// Write a function to find the longest word in a given string.



function logWord(str){
    const strSp = str.split(" ");
    let longestWord = "";
    for(let i = 0; i < strSp.length; i++){
        if(strSp[i].length > longestWord.length){
            longestWord = strSp[i]
        }
    }
    return longestWord;
}


const logStr = logWord("I am learning Programming to become a programmer");
console.log(logStr);