document.getElementById("btn-mouse").addEventListener('mouseenter',function () {
    
});

document.getElementById('user-name').addEventListener('focus', function () {
    console.log('write name');
})

document.getElementById('user-email').addEventListener('keydown', function (event) {
    console.log("typing",event.target.value);
})