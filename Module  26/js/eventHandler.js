document
  .getElementById("btn-update-title")
  .addEventListener("click", function titleUpdate() {
    document.getElementById("title").innerText = "morshed rifat";
  });

document
  .getElementById("btn-login")
  .addEventListener("click", function userLogin() {
    const userIn = document.getElementById("login-info");
    userIn.innerText = "User Logged in";
  });


//   handle input text


document.getElementById("btn-name-update").addEventListener('click', function () {
    const inputName = document.getElementById('input-name');
    const name = inputName.value;
    document.getElementById('name-text').innerText = name;
} );