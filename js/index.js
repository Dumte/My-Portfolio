// Creating button clicks to show/hide navbar
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".nav-links");
var links = document.querySelector(".nav-links li");

togglebtn.addEventListener("click", function(){
  this.classList.toggle("click");
  nav.classList.toggle("open");
  })

var typed = new Typed(".input", {
  strings:["Front-end Developer","UX Designer","Web Developer"], 
  typedSpeed : 50,
  backSpeed : 55, 
  loop : true
})