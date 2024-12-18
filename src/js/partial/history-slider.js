var swiper = new Swiper(".mySwiper-history", {
    slidesPerView: 4.1,
    spaceBetween: 0,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next-history",
        prevEl: ".swiper-button-prev-history",
      },
      breakpoints: {
        340: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
        510: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
        840: {
          slidesPerView: 3.7,
          spaceBetween: 20,
        },
        1024: {
            slidesPerView:4.1,
            spaceBetween: 0,
          },
      },
  });