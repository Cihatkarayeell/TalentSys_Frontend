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
