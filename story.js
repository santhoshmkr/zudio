let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

let logo = document.querySelector(".logo"); // Use querySelector to get a single element
logo.addEventListener('click', () => {
    window.location.href = 'index.html';
});
// hamburger
let menu = document.querySelector(".hamburger");
let navBar = document.querySelector("nav");
let ulNav = document.querySelector("nav>ul");
let head = document.getElementById("head");

menu.addEventListener('click', event => {
    event.preventDefault();
    navBar.style.display = navBar.style.display == "none" || navBar.style.display == "" ? "block" : "none"
    ulNav.style.flexDirection = ulNav.style.flexDirection == "" || ulNav.style.flexDirection == "row" ? "column" : "row"
    menu.style.display = "none"
        // let ham = head.createAttribute("div");
        // ham.appendChild(ham);
        // ham.appendChild(ulNav);
        // ham.style.height = '300 px';
        // ulNav.style
})

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}