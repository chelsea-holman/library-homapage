

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
  setTimeout(showSlides, 5000); 
}




  
    function carouselfixes() {
        var carouselcontainer = document.getElementsByClassName("EBSCOcarouselContainer");
        if (carouselcontainer.length > 0) {
            for (var ebsco = 0; ebsco < carouselcontainer.length; ebsco++) {
                carouselcontainer[ebsco].style.display = "none"; 
                carouselcontainer[ebsco].style.display = "block"; 
                if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) { 
                    carouselcontainer[ebsco].scrolling = "no";
                    
                }
            }
        }
    }
    window.addEventListener("load", carouselfixes(), false);
  
 
 
