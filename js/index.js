//HOME
Interfaz.numeroCarrito();

// ----- Slider

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

// Arrows of my slider

const moveToNextSlide = () => {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

const moveToPrevSlide = () => {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
} 

// EventListener for my arrows

const nextButton = document.getElementById("carousel__button--next");
nextButton.addEventListener("click", moveToNextSlide);

const prevButton = document.getElementById("carousel__button--prev");
prevButton.addEventListener("click", moveToPrevSlide);


