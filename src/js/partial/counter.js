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