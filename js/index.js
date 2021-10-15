//PÁGINA HOME

// ----- Numero carrito

const numeroCarritoStorage = localStorage.getItem('numeroCarrito');
const numeroCarrito = document.querySelector(".circle");

if(numeroCarritoStorage !== null) {
    numeroCarrito.innerHTML = numeroCarritoStorage;
}

// ----- Slider

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

// Funciones flechas

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

// Se le asigna la función a las flechitas

const nextButton = document.getElementById("carousel__button--next");
nextButton.addEventListener("click", moveToNextSlide);

const prevButton = document.getElementById("carousel__button--prev");
prevButton.addEventListener("click", moveToPrevSlide);


