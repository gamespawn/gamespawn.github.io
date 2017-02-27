var slideIndex = 1;
function showSlides(n) {
    "use strict";
    var i,
        slides = document.getElementsByClassName("slideshowInnerContainer"),
        dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i += 1) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i += 1) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
function plusSlides(n) {
    "use strict";
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    "use strict";
    showSlides(slideIndex = n);
}

//function isOverflowed(element) {
//    "use strict";
//    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
//}
//function setSmallerFont(element) {
//    "use strict";
//    //$('#fitin div').css('font-size', (parseInt($('#fitin div').css('font-size')) - 1) + "px" );
//    return 0;
//}
//function GetContainerSize() {
//    "use strict";
//    var wText = document.getElementById("DescriptionText1"),
//        pText = document.getElementById("DescriptionText2"),
//        eText = document.getElementById("DescriptionText3"),
//        sText = document.getElementById("DescriptionText4");
//    if (isOverflowed(wText)) {
//        setSmallerFont(wText);
//    }
//    if (isOverflowed(pText)) {
//        setSmallerFont(pText);
//    }
//    if (isOverflowed(eText)) {
//        setSmallerFont(eText);
//    }
//    if (isOverflowed(sText)) {
//        setSmallerFont(sText);
//    }
//}
window.onload = function () {
    "use strict";
    showSlides(slideIndex);
};

