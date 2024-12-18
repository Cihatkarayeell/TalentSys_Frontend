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
