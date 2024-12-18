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
