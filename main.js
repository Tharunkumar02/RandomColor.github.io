console.log("connected")

var clickMe = document.getElementById("Click");

var hexCode = document.getElementById("colorCode1");

var mainDiv = document.querySelector("body");

clickMe.addEventListener('click', function(){
    mainDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) +")";
    hexCode.innerHTML = mainDiv.style.backgroundColor;
})
