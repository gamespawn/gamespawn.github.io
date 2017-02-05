function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
var slideIndex = 1;
window.onload=function() {
    showSlides(slideIndex);
}

//function GetContainerSize ()
//{
//    var textContainer = document.getElementById ("DescriptionText");
//    var imgContainer = document.getElemnentById ("")
//    while( is_overflow_in_the_second_div() ) {
//        set_smaller_font();
//    }
//}
