// option 2 for event handler

function makeYellow() {
    document.body.style.backgroundColor = "yellow";
}

function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// option 3 for event handler

const btnMakeBlue = document.getElementById("btn-make-blue");

btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};



// option 4 for event handler

const btnMakePurple = document.getElementById("btn-make-purple");

function makePurple() {
  document.body.style.backgroundColor = "purple";
};

btnMakePurple.onclick = makePurple