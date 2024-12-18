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

