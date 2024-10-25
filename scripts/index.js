const swiper = new Swiper(".reviews-swiper", {
  loop: true,

  pagination: {
    el: ".reviews-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".reviews-next",
    prevEl: ".reviews-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const reviews = document.querySelectorAll(".review");

reviews.forEach((slide) => {
  const showMoreButton = slide.querySelector(".review-showmore");
  const showLessButton = slide.querySelector(".review-showless");

  showMoreButton.addEventListener("click", () => {
    slide.classList.add("full");
  });

  showLessButton.addEventListener("click", () => {
    slide.classList.remove("full");
  });
});
