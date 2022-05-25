//form 

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
  });

  function validateForm() {
    let x = document.forms["Contact"]["Name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    let x1 = document.forms["Contact"]["Email"].value;
    if (x1 == "") {
      alert("Email must be filled out");
      return false;
    }
    let x2 = document.forms["Contact"]["PHN"].value;
    if (x2 == "") {
      alert("Phone number must be filled out");
      return false;
    }
    let x3 = document.forms["Contact"]["Message"].value;
    if (x3 == "") {
      alert("Message must be filled out");
      return false;
    }
    
  };


  function openForm() {
    document.getElementById("mContact").style.display = "block";
    document.getElementById("OB").style.display = "none";
    document.getElementById("CT").style.display = "none";

  }
  
  function closeForm() {
    document.getElementById("mContact").style.display = "none";
    document.getElementById("OB").style.display = "block";
    document.getElementById("CT").style.display = "block";
  };




//slide show

var slideIndex = 0;
showSlides();
//add the global timer variable
var slides,dots,timer;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    
    timer = setTimeout(showSlides, 5500); 
}

function plusSlides(position) {
    //clear/stop the timer
    clearTimeout(timer);
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    //create a new timer
    timer = setTimeout(showSlides, 5500);
}

function currentSlide(index) {
    //clear/stop the timer
    clearTimeout(timer);
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    //set the slideIndex with the index of the function
    slideIndex = index;
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
  }

