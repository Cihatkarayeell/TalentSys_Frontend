window.addEventListener('scroll', () => {
    const topIcon = document.querySelector('.top-button');
    
    // Scroll pozisyonu 1000px'i geçince active sınıfı ekle
    if (window.scrollY > 1000) {
      topIcon.classList.add('active');
    } else {
      topIcon.classList.remove('active');
    }
  });
  