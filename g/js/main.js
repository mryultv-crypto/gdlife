// Header scroll effect
const header = document.getElementById('header');
const topBtn = document.getElementById('top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 1)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        topBtn.classList.add('show');
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
        header.style.boxShadow = 'none';
        topBtn.classList.remove('show');
    }
});

// Smooth scroll to TOP
topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Popup Swiper
const popupSwiper = new Swiper('.main-popup-swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});

// Popup Visibility Logic
const layerPopup = document.getElementById('layer-popup');
const popupClose = document.getElementById('popup-close');
const todayClose = document.getElementById('today-close');

const isPopupHidden = localStorage.getItem('hidePopup');
const hideDate = localStorage.getItem('hideDate');
const now = new Date().getTime();

if (!isPopupHidden || (hideDate && now > hideDate)) {
    layerPopup.style.display = 'block';
}

popupClose.addEventListener('click', () => {
    if (todayClose.checked) {
        const expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
        localStorage.setItem('hidePopup', 'true');
        localStorage.setItem('hideDate', expiry);
    }
    layerPopup.style.display = 'none';
});

// Tab Switching logic
const tabMenuItems = document.querySelectorAll('.tab-menu li');
const tabContents = document.querySelectorAll('.tab-content');

tabMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetTab = item.getAttribute('data-tab');
        tabMenuItems.forEach(mi => mi.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));
        item.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Form Submission (Placeholder)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('상담 신청이 완료되었습니다. 확인 후 연락드리겠습니다.');
    contactForm.reset();
});
