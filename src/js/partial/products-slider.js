var swiper = new Swiper(".mySwiper-products", {
    freeMode: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next-news",
        prevEl: ".swiper-button-prev-news",
    },
    breakpoints: {
        340: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
        510: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
        640: {
          slidesPerView: 2.4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView:3.9,
          spaceBetween: 20,
        },
        1920: {
          slidesPerView: 5.4,
          spaceBetween: 20,
        },
      },
  });


  