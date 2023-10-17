var imageUrls = [
  "/public/images/sharks.avif",
  "/public/images/bird-watching.avif",
  "/public/images/wine club.avif",
  "/public/images/snowy-bird.avif",
  "/public/images/hiking.avif",
  "/public/images/beach-yoga.avif",
  "/public/images/cardinal.avif"
];


function updateCarousel() {
  var randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

  document.querySelector("#myCarousel .carousel-inner .carousel-item:first-child img").src = randomImageUrl;
}

window.onload = updateCarousel;

const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
 
})