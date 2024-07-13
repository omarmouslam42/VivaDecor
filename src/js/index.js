const scrollToTopBtn = document.querySelector('.scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});


scrollToTopBtn.addEventListener('click', () => {
    console.log("ff");
    window.scrollTo({ top: 0, behavior: 'smooth' });
});