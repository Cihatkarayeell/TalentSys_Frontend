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
