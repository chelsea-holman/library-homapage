
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

    

    //<![CDATA[
    function carouselfixes() {
        var carouselcontainer = document.getElementsByClassName("EBSCOcarouselContainer");
        if (carouselcontainer.length > 0) {
            for (var ebsco = 0; ebsco < carouselcontainer.length; ebsco++) {
                carouselcontainer[ebsco].style.display = "none"; // For Chrome v44 xsl iframe bug.
                carouselcontainer[ebsco].style.display = "block"; // For Chrome v44 xsl iframe bug.
                if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) { //check if using iOS mobile
                    carouselcontainer[ebsco].scrolling = "no";
                    
                }
            }
        }
    }
    window.addEventListener("load", carouselfixes(), false);
    //]]>

    
