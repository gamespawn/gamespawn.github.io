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
    switch(whichProject){
        case 0:
            descBox.innerHTML = "There are currently NO ongoing projects. Come back soon! (After Week 3!)";
            recBox.innerHTML = "";
            upBox.innerHTML = "S o o n."
            break;
        case 1:
            descBox.innerHTML = "There are currently NO ongoing projects. Come back soon! (After Week 3!)";
            recBox.innerHTML = "";
            upBox.innerHTML = "S o o n."
            break;
        case 2:
            descBox.innerHTML = "There are currently NO ongoing projects. Come back soon! (After Week 3!)";
            recBox.innerHTML = "";
            upBox.innerHTML = "S o o n."
            break;
        case 3:
            descBox.innerHTML = "There are currently NO ongoing projects. Come back soon! (After Week 3!)";
            recBox.innerHTML = "";
            upBox.innerHTML = "S o o n."
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