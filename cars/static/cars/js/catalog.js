// ==== Переменные ====
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');

const modalElements = {
    image: document.getElementById('modal-image'),
    title: document.getElementById('modal-title'),
    brand: document.getElementById('modal-brand'),
    model: document.getElementById('modal-model'),
    year: document.getElementById('modal-year'),
    mileage: document.getElementById('modal-mileage'),
    color: document.getElementById('modal-color'),
    description: document.getElementById('modal-description'),
    price: document.getElementById('modal-price')
};

// ==== Функция для открытия модального окна ====
function openModal(card) {
    modal.style.display = 'flex';
    modalElements.image.src = card.dataset.image;
    modalElements.title.textContent = `${card.dataset.brand} ${card.dataset.model}`;
    modalElements.brand.textContent = card.dataset.brand;
    modalElements.model.textContent = card.dataset.model;
    modalElements.year.textContent = card.dataset.year;
    modalElements.mileage.textContent = card.dataset.mileage || '—';
    modalElements.color.textContent = card.dataset.color || '—';
    modalElements.description.textContent = card.dataset.description || 'Описание отсутствует';
    modalElements.price.textContent = formatPrice(card.dataset.price);
}

// ==== Функция для закрытия модального окна ====
function closeModal() {
    modal.style.display = 'none';
}

// ==== Обработчики карточек ====
cards.forEach(card => {
    card.addEventListener('click', e => {
        if (e.target.classList.contains('btn-buy')) return; // Игнорируем клик по кнопке "Купить"
        openModal(card);
    });
});

// ==== Закрытие модального окна ====
modalClose.addEventListener('click', closeModal);

// Закрытие при клике вне модального контента
modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
});

modal.addEventListener('keypress', function (e) {
		if(e.key === 'Escape'){
            closeModal()
        }
	});

// ==== Анимация появления карточек ====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

// ==== Анимация кнопки корзины ====
const cartBtn = document.querySelector('.btn-cart');
if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        cartBtn.classList.add('clicked');
        setTimeout(() => cartBtn.classList.remove('clicked'), 500);
    });
}

function formatPrice(price) {
    return Number(price).toLocaleString('ru-RU'); // '2 000 000'
}

