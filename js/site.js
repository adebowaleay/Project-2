// jQuery 3.x-style ready event and locally scoped $

jQuery(function ($) {
    $('html').removeClass('nojs');
    $("html").addClass("hasjs");
   
    

// checking for password 
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const reason = document.getElementById('message')

form.addEventListener('submit', (e) => {

// checking for less then 6 and more then 20
  if (password.value.length <= 6 || password.value.length >= 20) {
  alert('Password must be between 6 to 20 characters')
  }
// checking for more then 20 
  if (message.value.length >= 50) {
   alert('message must be less than 50 characters')
  }



})
    
    });

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
