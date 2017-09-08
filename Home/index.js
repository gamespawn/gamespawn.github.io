var interval = 2000;
var imageNum = 0;
var imageArray = [];

$('div').each(function() {
  var id = $(this).attr('id');
  $imageArray.push(id);
});

function nextImage() {
  imageNum = (imageNum+1) % totalImages;
}
 
function playSlides() { 
  var currentImage = nextImage();
  $('.slideshowContainer > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end();
  debugger;
},  5000);