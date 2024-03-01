const titleItems = document.querySelectorAll(".title-list_item");
const sliderItems = document.querySelectorAll(".slider-item");
const dots = document.querySelectorAll(".slider__dots-item");
let currentSlide = 0;

document.querySelector(".arrow-left").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

document.querySelector(".arrow-right").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

titleItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    showSlide(index);
  });
});

function showSlide(index) {
  sliderItems.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  titleItems.forEach((item) => {
    item.classList.remove("title-list_item--active");
  });

  if (index >= sliderItems.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = sliderItems.length - 1;
  } else {
    currentSlide = index;
  }

  sliderItems[currentSlide].style.display = "flex";
  dots[currentSlide].classList.add("active");
  titleItems[currentSlide].classList.add("title-list_item--active");
}
