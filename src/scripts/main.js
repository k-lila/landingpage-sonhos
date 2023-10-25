import * as opening from './openings.js';
import * as buttons from './buttons.js';
import * as dreams from './dreams.js';
import { carouselDreams } from './carousel.js';

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM content loaded');
    opening.openingScene(false);
    opening.openingCarousel()

    dreams.updateTitle();

    carouselDreams();

    document.getElementById('dreams-btn')
    .addEventListener('click', function() {
        opening.openingDreaming(false);
    });

    document.getElementById('back-btn')
    .addEventListener('click', function() {
        buttons.backButton();
    });

    document.getElementById('carousel-close')
    .addEventListener('click', function() {
        buttons.closeCarousel();
    })


})
