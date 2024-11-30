// Selectors
const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-menu');
const closeMenuButton = document.querySelector('.close-menu');
const slides = document.querySelectorAll('.slideshow-slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;

// Page load event to add the loaded class
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    showSlide(currentIndex);
});

// Toggle side menu
menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});

// Close side menu
closeMenuButton.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (sideMenu.classList.contains('open') && !sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove('open');
    }
});

// Slideshow functionality
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        slide.style.opacity = i === index ? '1' : '0';
    });
}

// Change to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Change to the previous slide
function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Start the slideshow
const slideInterval = setInterval(nextSlide, 5000);

// Add event listeners for arrows
[leftArrow, rightArrow].forEach((arrow, index) => {
    arrow.addEventListener('click', (event) => {
        event.preventDefault();
        index === 0 ? previousSlide() : nextSlide();
    });
});