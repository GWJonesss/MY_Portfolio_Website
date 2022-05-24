

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


  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }