console.log("hello world");
// console.log(document.body);

// option:1 getElementsByTagName

let liColl = document.getElementsByTagName("li");
console.log(liColl);

for (const li of liColl) {
      console.log(li.innerText);
}

// option:2 getElementsById
//change html text using js
const fruitsTitle = (document.getElementById("fruits-title"));

fruitsTitle.innerText= "fruits title changed by js"
//

//change html text using js
console.log(
  (document.getElementById("place-title").innerText = "My tour list")
);
//


// option:3 getElementsByClassName
let places = (document.getElementsByClassName("importent-places"));
console.log(places);

for (const place of places) {
    console.log(place.innerText);
}

//
// option:4 querySelectorAll

console.log(document.querySelectorAll("#fruits-title"));

//

console.log(document.querySelectorAll(".fruits-container"));

//

const somLis = document.querySelectorAll(".fruits-container li");

console.log(somLis);

for (const li of somLis) {
    console.log(li);
}

// option:5 querySelector
// Select one item 
const somLi = document.querySelector(".fruits-container li");

console.log(somLi.innerText);



document.getElementById("fruits-title").style.color = "red";

document.getElementById("fruits-title").style.backgroundColor = "black";


//getAttribute

const title = document.getElementById("fruits-title");


title.getAttribute('id');

title.getAttribute('class'); //see classes

title.classList.remove("new-fruit"); //remove any class from class list  

title.classList.add("new-fruit"); //add a class in class list


// set any attribute in html by js

const setAttribute = document.getElementById("fruits-title");

title.setAttribute("title", "tooltip set by js");

//get innerHtml

document.getElementsByClassName("fruits-container")[0].innerHTML;

//innerHtml change
document.getElementsByClassName("fruits-container")[0].innerHTML = "<p>Morshed rifat</p>";

//innerText
// document.getElementsByClassName("fruits-container")[0].innerText;