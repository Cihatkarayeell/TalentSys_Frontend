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

