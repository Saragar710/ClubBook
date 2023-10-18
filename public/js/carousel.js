var imageUrls = [
  "/images/sharks.avif",
  "/images/bird-watching.avif",
  "/images/wine club.avif",
  "/images/snowy-bird.avif",
  "/images/hiking.avif",
  "/images/beach-yoga.avif",
  "/images/cardinal.avif"
];


function updateCarousel() {
  var randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

  document.querySelector("#myCarousel .carousel-inner .carousel-item:first-child img").src = randomImageUrl;
}

window.onload = updateCarousel;

const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {

})