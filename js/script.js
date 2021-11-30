window.addEventListener(`scroll`, () => {
  const upButton = document.querySelector(`.scroll-up-link`);
  if (window.pageYOffset > 100) {
    upButton.classList.add(`scroll-up-link-showed`);
  } else {
    setTimeout(() => upButton.classList.remove(`scroll-up-link-showed`), 300);
  }
});

// let upButton = document.querySelector(`.scroll-up-link`);

// window.onscroll = function () {
//   if (window.pageYOffset > 50) {

//     upButton.classList.add(`scroll-up-link-showed`);
//   } else {
//     setTimeout(() => upButton.classList.remove(`scroll-up-link-showed`), 300);
//   }
// };

// upButton.onclick = function () {
//   window.scrollTo(0, 0);
// };


/* SLIDER */

let slideIndex = 1;
/* Основная функция слайдера */
const showSlides = (n) => {
  const slides = document.querySelectorAll(".slider-item");
  const dots = document.querySelectorAll(".slider-controls-button");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (const slider of slides) {
    slider.style.display = "none";
  }

  for (const dot of dots) {
    dot.classList.remove("slider-controls-button-active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("slider-controls-button-active");
}

/* Индекс слайда по умолчанию */
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
const plusSlide = () => {
  showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
const minusSlide = () => {
  showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
const currentSlide = (n) => {
  showSlides(slideIndex = n);
}