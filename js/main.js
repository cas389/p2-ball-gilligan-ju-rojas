// Testing
console.log("Testing to make sure JS is working");

// PopUp Ad
var overlay = document.querySelector("#overlay");


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#show-modal-btn").addEventListener("click", () => {
    overlay.style.display = "block";
  })
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#close-modal-btn").addEventListener("click", () => {
    overlay.style.display = "none";
  })
});

/*
document.querySelector("#show-modal-btn").addEventListener("click", () => {
  overlay.style.display = "block";
})

document.querySelector("#close-modal-btn").addEventListener("click", () => {
  overlay.style.display = "none";
})*/




// Hamburger Menu
function showMenu (){
  document.querySelector('.navigation').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('hide');
  document.querySelector('.close').classList.toggle('show');
}


// Read More Button

//Button 1

var owButton1 = document.getElementById("ow_button1")
var hiddenContent = document.getElementById('readmore');

owButton1.addEventListener("click", function(event){
  event.preventDefault();
  hiddenContent.style.display = (hiddenContent.style.display === "none") ? "block" :
  "none";
}, false);

//Button 2
var owButton2 = document.getElementById("ow_button2")
var hiddenContent2 = document.getElementById('readmore2');

owButton2.addEventListener("click", function(event){
  event.preventDefault();
  hiddenContent2.style.display = (hiddenContent2.style.display === "none") ? "block" :
  "none";
}, false);

//Button 3

var owButton3 = document.getElementById("ow_button3")
var hiddenContent3 = document.getElementById('readmore3');

owButton3.addEventListener("click", function(event){
  event.preventDefault();
  hiddenContent3.style.display = (hiddenContent3.style.display === "none") ? "block" :
  "none";
}, false);


