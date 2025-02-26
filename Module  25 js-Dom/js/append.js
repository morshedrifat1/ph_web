//create new element and section //

// type 1
// -------------------------------------------
const main = document.getElementById("main");

const createSection = document.createElement("section");
console.log(createSection);
const createHeading = document.createElement("h1");
createHeading.innerText = "Best Food";

const createUl = document.createElement("ul");

const createLi1 = document.createElement("li");
createLi1.innerText = "beep";
createUl.appendChild(createLi1);

const createLi2 = document.createElement("li");
createLi2.innerText = "matan";
createUl.appendChild(createLi2);

const createLi3 = document.createElement("li");
createLi3.innerText = "chicken";
createUl.appendChild(createLi3);

createSection.appendChild(createHeading);
createSection.appendChild(createUl);
main.appendChild(createSection);


// type 1
// -------------------------------------------
const mainSec = document.getElementById("main");
const newSec = document.createElement("section");
newSec.innerHTML = `

<h1>Feni Upazila list</h1>
<ul>
    <li>Dagonbhuiyan</li>
    <li>Forsuram</li>
    <li>Sonagazi</li>
    <li>Fulgazi</li>
    <li>Chagolnaiya</li>
    <li>Feni Sador</li>
</ul>
`;

mainSec.appendChild(newSec);
