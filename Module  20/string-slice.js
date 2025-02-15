// slice() method 

const add = "dagonbhuiyan";

const part = add.slice(0,5);

console.log(part);


// split() method
const sentence = "i am a hardworking person"

console.log(sentence.split("")); //without white space
console.log(sentence.split(" ")); //with white space
console.log(sentence.split("a")); //split before "a"  latter

const names = "rohim,korim,rifat";

const fri = names.split(","); //split array before this "," comma

console.log(fri);


// join() method
const friends = [ 'rohim', 'korim', 'rifat' ];

console.log(friends.join("+"));
console.log(friends.join("|"));