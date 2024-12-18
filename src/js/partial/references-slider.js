var swiper = new Swiper(".mySwiper-references", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next-references",
      prevEl: ".swiper-button-prev-references",
    },
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    /*
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed:1200,
    loop:true,
    */
  })