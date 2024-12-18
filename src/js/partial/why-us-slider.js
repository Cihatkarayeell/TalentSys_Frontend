var swiper = new Swiper(".mySwiper-why-us", {
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
       nextEl: ".swiper-button-next-why-us",
       prevEl: ".swiper-button-prev-why-us",
    },
    breakpoints: {
        350: {
            slidesPerView: 1.46,
            spaceBetween: 15,
          },
      640: {
        slidesPerView: 2.7,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3.7,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
    },
  });