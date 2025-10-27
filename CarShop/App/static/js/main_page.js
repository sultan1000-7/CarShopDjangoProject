
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(el => observer.observe(el));


window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    let offset = window.scrollY * 0.5;
    hero.style.backgroundPositionY = `${offset}px`;
});


const cartBtn = document.querySelector('.btn-cart');
cartBtn.addEventListener('click', () => {
    cartBtn.classList.add('clicked');
    setTimeout(() => cartBtn.classList.remove('clicked'), 500);
});
