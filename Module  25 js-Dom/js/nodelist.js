// NodeList, htmlcollection, parentNode, childnodes

const nod = document.getElementById("places-container");

nod.childNodes;
nod.childNodes[0];
nod.childNodes[3].childNodes[1];
nod.childNodes[3].childNodes[1].nextSibling;
nod.childNodes[3].childNodes[1].previousSibling;

nod.firstChild;
nod.lastChild;
nod.parentNode;

// createElement and add element
const placeLi = document.querySelector("#places-container ul");
const li = document.createElement("li");
li.innerText = "brand new place to go";
placeLi.appendChild(li);

