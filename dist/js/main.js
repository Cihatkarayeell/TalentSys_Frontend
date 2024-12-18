const BASE_URL = window.location.protocol + '//' + window.location.host;
const PATH_URL = window.location.pathname;
const FULL_URL = window.location.href;
const app = {};
const GET_PARAM = (key) => {
	return new URL(FULL_URL).searchParams.get(key);
};



// PARTIALS
const searchButton = document.getElementById('searchButton');
const searchBox = document.getElementById('searchBox');

// searchButton'a tıklandığında searchBox'a active sınıfını ekle
searchButton.addEventListener('click', (event) => {
    searchBox.classList.toggle('active');
    event.stopPropagation(); // Olayın dışa yayılmasını engelle
});

// document üzerindeki tıklamaları dinle
document.addEventListener('click', (event) => {
    // Eğer tıklanan öğe searchButton veya searchBox değilse, active sınıfını kaldır
    if (!searchButton.contains(event.target) && !searchBox.contains(event.target)) {
        searchBox.classList.remove('active');
    }
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        document.body.style.zoom = '1'; // Zoom'u sıfırlar
    });

    input.addEventListener('blur', function() {
        document.body.style.zoom = ''; // Zoom'u eski haline getirir
    });
});

// Tüm navbar a elementlerini seçin
const navLinks = document.querySelectorAll('.navbar-list li > a');

// Her a etiketi için bir click olayı tanımlayın
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {

    // Tıklanan a elementinin hemen altındaki kardeş .dropdown elementini seç
    const dropdown = link.nextElementSibling;

    // Eğer başka bir dropdown açıksa onu kapat ve ilgili a elementinden active sınıfını kaldır
    document.querySelectorAll('.dropdown.active').forEach(openDropdown => {
      if (openDropdown !== dropdown) {
        openDropdown.classList.remove('active');
        openDropdown.previousElementSibling.classList.remove('active'); // İlgili a elementinden active kaldır
      }
    });

    // Eğer bir .dropdown elementi varsa
    if (dropdown && dropdown.classList.contains('dropdown')) {
      // Dropdown açık değilse aç ve a'ya active sınıfını ekle
      if (!dropdown.classList.contains('active')) {
        dropdown.classList.add('active');
        link.classList.add('active');
      } else {
        // Dropdown zaten açıksa kapat ve a'dan active sınıfını kaldır
        dropdown.classList.remove('active');
        link.classList.remove('active');
      }
    }
  });
});

// Dışarıya tıklandığında tüm .dropdown'ların ve ilgili a elementlerinin active sınıfını kaldır
document.addEventListener('click', (event) => {
  const isClickInside = event.target.closest('.navbar-list');
  
  // Eğer tıklama navbar-list dışındaysa tüm aktif dropdown'ları kapat
  if (!isClickInside) {
    document.querySelectorAll('.dropdown.active').forEach(openDropdown => {
      openDropdown.classList.remove('active');
      openDropdown.previousElementSibling.classList.remove('active'); // İlgili a elementinden active kaldır
    });
  }
});



//MOBİLE MENU 
// Elementleri seç
const mobileMenu = document.getElementById('mobileMenu');
const menuOpenBtn = document.getElementById('menuOpenBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const body = document.querySelector('body');

// Menü açma butonuna tıklanınca active sınıfını ekle
menuOpenBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  body.classList.add('active')
});

// Menü kapama butonuna tıklanınca active sınıfını kaldır
menuCloseBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  body.classList.remove('active');
});
// .menu-item içindeki a etiketlerine tıklama olayını ekleyelim
document.querySelectorAll('#mobileMenu a').forEach(function(link) {
  link.onclick = function() {
      // Sidebar'ı kapat
      document.querySelector('#mobileMenu').classList.remove('active');
      document.querySelector('body').classList.remove('active');
  };
});


// Gerekli elementleri seç
const navbarList = document.getElementById('navbarList');
const mobileMenuList = document.querySelector('#mobileMenu .mobile-menu-list');
const navbarParent = navbarList.parentElement; // Orijinal ebeveyni kaydet

// Bir fonksiyon ile taşıma işlemi yap
function handleResize() {
  if (window.innerWidth <= 1024) {
    if (!mobileMenuList.contains(navbarList)) {
      mobileMenuList.appendChild(navbarList); // `navbarList` öğesini `mobileMenuList` içine taşı
    }
  } else {
    if (!navbarParent.contains(navbarList)) {
      navbarParent.appendChild(navbarList); // `navbarList` öğesini orijinal yerine geri taşı
    }
  }
}

// Sayfa yüklendiğinde ve pencere yeniden boyutlandığında kontrol et
window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);
 



// UTILS
function fadeOut(element, soft = false, callback = null) {
	if(!element) {
		return false;
	}

	element.style.opacity = 1;

	(function fade() {
		if((element.style.opacity -= 0.1) < 0) {
			if(soft) {
				element.style.display = "none";
			} else {
				element.remove();
			}

			if(callback instanceof Function) {
				callback();
			} else if(window[callback] instanceof Function) {
				window[callback]();
			}
		} else {
			requestAnimationFrame(fade);
		}
	})();

}

function smoothScroll(element) {
	if(element) {
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

function smoothScrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

document.addEventListener('click', event => {
	if(event.target.tagName !== 'A') {
		return false;
	}
	const anchor = event.target;
	const anchor_href = anchor.getAttribute('href');

	if(anchor_href === '#') {
		event.preventDefault();
		smoothScrollToTop();
	}
	else if(anchor_href.charAt(0) === '#' || (anchor_href.charAt(0) === '/' && anchor_href.charAt(1) === '#')) {
		if(!anchor.hash) {
			return false;
		}

		const target = document.querySelector(anchor.hash);
		if(target) {
			event.preventDefault();
			smoothScroll(target);
		}
	}
});

window.onload = () => {
	document.querySelectorAll('img').forEach(image => {
		if(image.complete && typeof image.naturalWidth != 'undefined' && image.naturalWidth <= 0) {
			image.src = BASE_URL + '/img/no-image.jpg';
		}
	});
};


document.addEventListener('DOMContentLoaded', () => {
	// PARTIALS
	document.querySelectorAll('a').forEach(anchor => {
	if(anchor.hasAttribute('href') && anchor.href.startsWith('tel:')) {
		anchor.href = 'tel:' + anchor.href.replaceAll(/[^\d+]/g, '');
	}
});

	document.querySelectorAll('a').forEach(anchor => {
	if(anchor.hasAttribute('target') && anchor.getAttribute('target') === '_blank') {
		anchor.setAttribute('rel', 'noopener noreferrer nofollow');
	}
});

	document.addEventListener('contextmenu', event => {
	if(event.target.nodeName === 'IMG') {
		event.preventDefault();
	}
});

	/*document.querySelectorAll('table').forEach(table => {
	if(!table.parentElement.classList.contains('table-responsive')) {
		table.outerHTML = '<div class="table-responsive">' + table.outerHTML + '</div>';
	}
});
 */
});
 


 
// DOM tamamen yüklendiğinde çalışması için event listener
document.addEventListener('DOMContentLoaded', function() {
  // GDPR checkbox için click event listener
  const gdprCheckbox = document.getElementById('gdpr');
  if (gdprCheckbox) {
    gdprCheckbox.addEventListener('click', function() {
      if (gdprCheckbox.checked) {
        gdprCheckbox.classList.add('active');
      } else {
        gdprCheckbox.classList.remove('active');
      }
    });
  } else {
    //console.error('GDPR checkbox bulunamadı.');
  }

  // Privacy checkbox için click event listener
  const privacyCheckbox = document.getElementById('privacy');
  if (privacyCheckbox) {
    privacyCheckbox.addEventListener('click', function() {
      if (privacyCheckbox.checked) {
        privacyCheckbox.classList.add('active');
      } else {
        privacyCheckbox.classList.remove('active');
      }
    });
  } else {
    //console.error('Privacy checkbox bulunamadı.');
  }
  // Privacy checkbox için click event listener
  const privacyCheckboxNewsletter = document.getElementById('privacy-newsletter');
  if (privacyCheckboxNewsletter) {
    privacyCheckboxNewsletter.addEventListener('click', function() {
      if (privacyCheckboxNewsletter.checked) {
        privacyCheckboxNewsletter.classList.add('active');
      } else {
        privacyCheckboxNewsletter.classList.remove('active');
      }
    });
  } else {
    //console.error('Privacy checkbox bulunamadı.');
  }
  // Privacy checkbox için click event listener
  const gdprCheckboxNewsletter = document.getElementById('gdpr-newsletter');
  if (gdprCheckboxNewsletter) {
    gdprCheckboxNewsletter.addEventListener('click', function() {
      if (gdprCheckboxNewsletter.checked) {
        gdprCheckboxNewsletter.classList.add('active');
      } else {
        gdprCheckboxNewsletter.classList.remove('active');
      }
    });
  } else {
    //console.error('Privacy checkbox bulunamadı.');
  }
});


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
  

var swiper = new Swiper(".mySwiper-news", {
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
// Modal ve gerekli elemanları seç
const detailModal = document.querySelector('.detail-modal');

// Eğer sayfada .detail-modal varsa kodu çalıştır
if (detailModal) {
    const openModalButtons = document.querySelectorAll('[data-toggle="detail-modal"]'); // Modali açmak için kullanılan tüm butonlar
    const closeModalButton = document.querySelector('.close-modal'); // Modali kapatmak için kullanılan buton
    const detailBlock = document.querySelector('.detail-modal .detail-block'); // Modal içerisindeki ana blok
    const body = document.querySelector('body'); // Modal içerisindeki ana blok

    // Her bir açma butonuna tıklama dinleyicisi ekle
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            detailModal.classList.add('active');
            body.classList.add('news-modal');
        });
    });

    // .close-modal butonuna tıklanınca modali kapatma fonksiyonu
    closeModalButton.addEventListener('click', () => {
        detailModal.classList.remove('active');
        body.classList.remove('news-modal');
    });

    // .detail-modal içinde .detail-block dışında bir yere tıklanınca modali kapatma fonksiyonu
    detailModal.addEventListener('click', (event) => {
        if (!detailBlock.contains(event.target)) {
            detailModal.classList.remove('active');
            body.classList.remove('news-modal');
        }
    });
}

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
function startCounter(element, target) {
    let count = 0;
    const increment = target / 200; // Hızı ayarlamak için artırma değeri

    const updateCount = () => {
        count += increment;
        if (count < target) {
            element.innerText = Math.floor(count);
            requestAnimationFrame(updateCount);
        } else {
            element.innerText = target;
        }
    };
    updateCount();
}

const counters = document.querySelectorAll('.count');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = +entry.target.getAttribute('data-target');
            startCounter(entry.target, target);
            observer.unobserve(entry.target); // Yalnızca bir kez çalıştır
        }
    });
}, {
    threshold: 0.5 // %50 görünür olduğunda sayacı başlat
});

counters.forEach(counter => {
    observer.observe(counter);
});
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


// Sayfada .form sınıfına sahip bir element olup olmadığını kontrol et
if (document.querySelectorAll('.form-element').length > 0) {
    // Tüm submit butonlarını seç
    const submitButtons = document.querySelectorAll('.submit-button');

    // Her submit butonuna tıklama olayını ekle
    submitButtons.forEach((button) => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Butonun varsayılan davranışını engeller
            event.stopPropagation(); // Tıklama olayının yukarıya yayılmasını durdurur

            // Form içindeki tüm input alanlarını kontrol et
            const formElement = button.closest('.form-element'); // İlgili formu bul
            const inputs = formElement.querySelectorAll('input'); // Formdaki inputları seç
            let hasInvalidField = false;

            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    // Input boşsa invalid sınıfı ekle
                    input.classList.add('invalid');
                    hasInvalidField = true; // En az bir invalid alan olduğunu işaretle
                } else {
                    // Input doluysa invalid sınıfını kaldır
                    input.classList.remove('invalid');
                }
            });

            // Eğer formda invalid alan varsa modal açılmasın
            if (hasInvalidField) {
                console.log("Formda eksik alanlar var. Lütfen kontrol edin.");
                return; // İşlemi burada kes
            }

            // Tüm alanlar geçerliyse modal açılır
            document.querySelector('.modal-dialog').classList.add('active');
        });
    });

    // Modal kapatma - close butonuna tıklama
    document.querySelector('.modal-dialog .close-button').addEventListener('click', function () {
        document.querySelector('.modal-dialog').classList.remove('active'); // Modal kapanır
    });

    // Modal kapatma - modal-box dışında bir yere tıklama
    document.addEventListener('click', function (event) {
        const modal = document.querySelector('.modal-dialog');
        const modalBox = document.querySelector('.modal-box');

        if (modal.classList.contains('active') && !modalBox.contains(event.target)) {
            modal.classList.remove('active'); // Modal kapanır
        }
    });

    // Modal içindeki tıklamaların dışarıya yayılmasını önle
    document.querySelector('.modal-box').addEventListener('click', function (event) {
        event.stopPropagation(); // modal-box içindeki tıklamaların dışarıya yayılmasını durdurur
    });
}

const videoModalCheck = document.querySelector('.video-modal');

if (videoModalCheck) {
  const modal = document.getElementById('modal'); // Tek modalı seç
  const openModalBtns = document.querySelectorAll('.videoModalBtn'); // Tüm açma butonlarını seç
  const closeModalBtn = document.getElementById('closeModalBtn'); // Kapatma butonunu seç
  const bodyElement = document.querySelector('body');

  // Modal açma işlevi
  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.classList.add('show');  // Modal içeriğini aşağı indir
      bodyElement.style.overflow = 'hidden'; // Sayfa kaydırmayı devre dışı bırak
    });
  });

  // Modal kapatma işlevi
  const closeModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.remove('show'); // Modalı tamamen gizle
      bodyElement.style.overflow = 'auto'; // Sayfa kaydırmayı geri getir
    }, 500); // Animasyon süresi kadar bekle
  };

  // Kapatma butonuna tıklama işlemi
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  // Modalın dışına tıklandığında kapatma
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}


function initFileUpload() {
    const fileInput = document.getElementById('upload-file');
    const fileNameLabel = document.getElementById('file-name');

    if (fileInput && fileNameLabel) { // Öğelerin var olup olmadığını kontrol edin
        fileInput.addEventListener('change', function() {
            // Seçilen dosyanın adını alıyoruz
            const files = fileInput.files;
            const fileName = files.length > 0 ? files[0].name : "Select file";

            // Dosya adını label içinde güncelliyoruz
            fileNameLabel.textContent = fileName;
        });
    } else {
        //console.error('fileInput veya fileNameLabel bulunamadı.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // .section-career-form elementi var mı kontrol ediliyor
    const careerFormSection = document.querySelector('.section-career-form');
    
    if (careerFormSection) {
        // Eğer element varsa fonksiyon çalıştırılıyor
        initFileUpload();
    } else {
        //console.log('.section-career-form bulunamadı, initFileUpload çalıştırılmadı.');
    }
});

window.addEventListener('scroll', () => {
    const topIcon = document.querySelector('.top-button');
    
    // Scroll pozisyonu 1000px'i geçince active sınıfı ekle
    if (window.scrollY > 1000) {
      topIcon.classList.add('active');
    } else {
      topIcon.classList.remove('active');
    }
  });
  


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJBU0VfVVJMID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG5jb25zdCBQQVRIX1VSTCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuY29uc3QgRlVMTF9VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuY29uc3QgYXBwID0ge307XHJcbmNvbnN0IEdFVF9QQVJBTSA9IChrZXkpID0+IHtcclxuXHRyZXR1cm4gbmV3IFVSTChGVUxMX1VSTCkuc2VhcmNoUGFyYW1zLmdldChrZXkpO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBQQVJUSUFMU1xyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvaGVhZGVyLmpzJykgXHJcbkBAaW5jbHVkZSgncGFydGlhbC93YXRlcm1hcmsuanMnKVxyXG5cclxuXHJcbi8vIFVUSUxTXHJcbkBAaW5jbHVkZSgndXRpbC9mYWRlLW91dC5qcycpXHJcbkBAaW5jbHVkZSgndXRpbC9zbW9vdGgtc2Nyb2xsLmpzJylcclxuQEBpbmNsdWRlKCd1dGlsL3JlcGxhY2UtYnJva2VuLWltYWdlLmpzJylcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblx0Ly8gUEFSVElBTFNcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvZm9ybWF0LXRlbC1saW5rLmpzJylcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvZXh0ZXJuYWwtbGluay1ub3JlZmVyLmpzJylcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvcHJvdGVjdC1pbWFnZS5qcycpXHJcblx0LypAQGluY2x1ZGUoJ3BhcnRpYWwvcmVzcG9uc2l2ZS10YWJsZS5qcycpICovXHJcbn0pO1xyXG4gXHJcblxyXG5cclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2luaXQuanMnKSBcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL25ld3NsZXR0ZXIuanMnKVxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvYmxvY2stbXVsdGlwbGUtc2xpZGVyLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2hlcm8tc2xpZGVyLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL25ld3Mtc2xpZGVyLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2RldGFpbC1tb2RhbC5qcycpXHJcbkBAaW5jbHVkZSgncGFydGlhbC9wcm9kdWN0cy1zbGlkZXIuanMnKVxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvcmVmZXJlbmNlcy1zbGlkZXIuanMnKVxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvd2h5LXVzLXNsaWRlci5qcycpXHJcbkBAaW5jbHVkZSgncGFydGlhbC9jb3VudGVyLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2hpc3Rvcnktc2xpZGVyLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2FjY29yZGlvbi5qcycpXHJcbkBAaW5jbHVkZSgncGFydGlhbC9yZWZlcmVuY2VzLXNjcm9sbC5qcycpXHJcbkBAaW5jbHVkZSgncGFydGlhbC9mb3JtLW1vZGFsLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL3ZpZGVvLW1vZGFsLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2ZpbGUtaW5wdXQuanMnKVxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvYmFjay10by10b3AuanMnKVxyXG5cclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
