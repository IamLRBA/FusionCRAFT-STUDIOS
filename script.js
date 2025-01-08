// JavaScript for Slider Functionality

document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.project .image-slider');

    sliders.forEach(slider => {
        const prevButton = slider.closest('.project').querySelector('.prev');
        const nextButton = slider.closest('.project').querySelector('.next');
        const wrapper = slider.querySelector('.slider-wrapper');
        const images = slider.querySelectorAll('img');
        const imageCount = images.length;
        let currentIndex = 0;

        const updateSlider = () => {
            const offset = -currentIndex * 100;
            wrapper.style.transform = `translateX(${offset}%)`;
        };

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? imageCount - 1 : currentIndex - 1;
            updateSlider();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex === imageCount - 1) ? 0 : currentIndex + 1;
            updateSlider();
        });
    });

    // Burger Menu Functionality
    const burgerButton = document.getElementById('burger-button');
    const menu = document.getElementById('menu');

    burgerButton.addEventListener('click', () => {
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!burgerButton.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});
