// document.getElementById().addEventListener('event type',handler);
document
  .getElementById("btn-make-green")
  .addEventListener("click", function makeGreen() {
    document.body.style.backgroundColor = "green";
  });

document
  .getElementById("btn-make-gold")
  .addEventListener("click", function makeGold() {
    document.body.style.backgroundColor = "gold";
  });

document
  .getElementById("btn-make-gray")
  .addEventListener("click", function makeGray() {
    document.body.style.backgroundColor = "gray";
  });

document
  .getElementById("btn-make-red")
  .addEventListener("click", function makeRed() {
    document.body.style.background = "red";
  });
