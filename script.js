// Selectors
const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-menu');
const closeMenuButton = document.querySelector('.close-menu');
const slides = document.querySelectorAll('.slideshow-slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;

// Page load event to add the loaded class
window.onload = function() {
    document.body.classList.add('loaded');
    showSlide(currentIndex); // Show the first slide on load
};

// Function to open the side menu
menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});

// Function to close the side menu
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
        slide.classList.remove('active'); // Remove active class from all slides
        slide.style.opacity = '0'; // Hide other slides
    });
    
    slides[index].classList.add('active'); // Add active class to the current slide
    slides[index].style.opacity = '1'; // Show current slide
}

// Function to change to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Increment index and loop back
    showSlide(currentIndex);
}

// Function to change to the previous slide
function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrement index and loop back
    showSlide(currentIndex);
}

// Start the slideshow
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Add event listeners for arrows
leftArrow.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action
    previousSlide();
});

rightArrow.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action
    nextSlide();
});
