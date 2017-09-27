var imageNum = 0;

var imgArray = ["5.jpg, 2.jpg, 3.jpg"];

function nextImage() {
		if(imageNum >= 3) {
    		imageNum = 0;
  	} 
  	img.src = imgArray[imageNum];
		document.slideshow.src = imgArray[imageNum];
  	imageNum++;  
}

function auto() {
		setInterval(nextImage, 3000);
}

window.onload = auto;