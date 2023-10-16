var imageUrls = ["../images/beach-yoga.avif", "../images/hiking.avif", "../images/bookclub.avif", "../images/sharks.avif", "../images/wine club.avif"];


function updateCarousel() {
  var randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

  document.querySelector("#myCarousel .carousel-inner .carousel-item:first-child img").src = randomImageUrl;
}

window.onload = updateCarousel;

const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
 
})