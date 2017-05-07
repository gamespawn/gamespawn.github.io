//var slideIndex = 0;
//
//function playSlides() {
//  "use strict";
//  var x = document.getElementByClassName("slideshowImg"),
//    i;
//  for (i = 0; i < x.length; i += 1) {
//    x[i].style.display = "none";
//  }
//  slideIndex += 1;
//  if (slideIndex > x.length) {
//    slideIndex = 1;
//  }
//  x[slideIndex - 1].style.display = "block";
//  setTimeout(playSlides, 2000);
//}
//
//playSlides();


$(".slideshowContainer > div:gt(0)").hide();
  
setInterval(function() { 
  $('.slideshowContainer > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slideshowContainer');
},  5000);


//
//window.onload = function () {
//  "use strict";
////  document.getElementsByClassName("slideshowImg").css('visibility','visible');
////  playSlides();
//};

