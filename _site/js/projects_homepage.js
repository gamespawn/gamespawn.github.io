let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;

document.getElementById("nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
    changeDesc(currentSlide);
}

function changeDesc(whichProject){
    let descBox = document.getElementById("description");
    let recBox = document.getElementById("recruiting");
    let upBox = document.getElementById("updates");
    let projName = document.getElementById("name");
    switch(whichProject){
        case 0:
            descBox.innerHTML = "Go to the University of California and meet the lovely and dateable mascots across the UC's, take and skip classes to spend time with them, and confess and go to college";
            recBox.innerHTML = "";
            upBox.innerHTML = ""
            projName.innerHTML = "Cross Campus"
            break;
        case 1:
            descBox.innerHTML = "A game with questionable morals.";
            recBox.innerHTML = "";
            upBox.innerHTML = ""
            projName.innerHTML = "Phantom Thief"
            break;
        case 2:
            descBox.innerHTML = "A puzzle room RPG where you have to navigate through a dungeon, uncover its mysteries, and ultimately escape!";
            recBox.innerHTML = "";
            upBox.innerHTML = ""
            projName.innerHTML = "The Escape Room"
            break;
        case 3:
            descBox.innerHTML = "A game about a delusional main character who thinks they are an AI (they are human). Oh and you can gamble for characters.";
            recBox.innerHTML = "";
            upBox.innerHTML = ""
            projName.innerHTML = "Synthetic Self Symphony"
            break;
    }
}

document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})

document.getElementById("GSprojects").addEventListener("click", () => {
  window.location.href = "projectsGS.html";
});
document.getElementById("GGJprojects").addEventListener("click", () => {
  window.location.href = "projectsGGJ.html";
});
document.getElementById("Personal").addEventListener("click", () => {
    window.location.href = "projectsPersonal.html";
  });

window.onload = function(){
    changeDesc(currentSlide);
}