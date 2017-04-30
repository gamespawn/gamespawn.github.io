var slideIndex = 0;
//playSlides();

function playSlides() {
  "use strict";
  var x = document.getElementByClassName("slideshowImg"),
    i;
  for (i = 0; i < x.length; i += 1) {
    x[i].style.display = "none";
  }
  slideIndex += 1;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(playSlides, 2000);
}

playSlides();
//window.onload = function () {
//  "use strict";
//  playSlides();
//};

