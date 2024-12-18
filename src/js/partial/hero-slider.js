var swiper = new Swiper(".mySwiper-hero", {
    effect: "fade",
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination-hero",
      clickable: true,
    },
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed:1800,
    on: {
      init: function () {
        createCustomPagination(this); // İlk sayfa yüklendiğinde custom pagination oluştur
      },
      slideChange: function () {
        updateCustomPagination(this); // Her slide değişiminde güncelle
      },
    },
  });


  function createCustomPagination(swiper) {
    const paginationContainer = document.querySelector('.custom-pagination');
    paginationContainer.innerHTML = ''; // Önce temizle
  
    swiper.slides.forEach((_, index) => {
      const bullet = document.createElement('span');
      bullet.classList.add('custom-bullet');
      if (index === swiper.activeIndex) bullet.classList.add('active'); // Aktif slide için
      bullet.dataset.index = index; // Her bullet'a bir index ekle
  
      // Bullet tıklama olayı
      bullet.addEventListener('click', () => {
        swiper.slideTo(index); // Swiper'da ilgili slide'a git
      });
  
      paginationContainer.appendChild(bullet);
    });
  }
  
  function updateCustomPagination(swiper) {
    const bullets = document.querySelectorAll('.custom-bullet');
    bullets.forEach((bullet, index) => {
      if (index === swiper.realIndex) {
        bullet.classList.add('active'); // Aktif olan bullet
      } else {
        bullet.classList.remove('active');
      }
    });
  }
  
