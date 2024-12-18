app.sectionSlider = {
    options: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            loop: false,
        },
        720: {
            slidesPerView: 2.2,
            spaceBetween: 10,
            loop: false,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
            loop: true,
        }
    },
    _2_options: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: false,
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: false,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
            loop: true,
        }
    },
    set: function () {
        document.querySelectorAll(".section-slider").forEach((item, index) => {
            app.sectionSlider.setSwiper(item, index);
        })
    },
    setSwiper: function (slider, index) {
        // .section-slider class'ı olan sliderlar otomatik olarak app.sectionSlider.options breakpoint ayarı ile set ediliyor
        // .section-slider da data-options değeri olursa aşağıdaki if koşuluna göre dinamik slider yapılabilir.
        // app.sectionSlider._2_options ayarı about sayfasındaki "Değerlerimiz" slider'ı için kullanılıyor. Diğerinden farkı 3 lü olması.

        let opt = null;

        if (slider.dataset.options == '2') {
            opt = app.sectionSlider._2_options;
        } else {
            opt = app.sectionSlider.options;
        }

        new Swiper(slider.querySelector(".swiper"), {
            navigation: {
                prevEl: slider.querySelector(".btn-nav.prev"),
                nextEl: slider.querySelector(".btn-nav.next"),
            },
            pagination: {
                clickable: true,
                el: slider.querySelector(".slider-pagination")
            },
            breakpoints: opt
        })
    },
    init: function () {
        if (document.querySelector(".section-slider")) {
            app.sectionSlider.set();
        }
    }
}
