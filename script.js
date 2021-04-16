
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
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
 