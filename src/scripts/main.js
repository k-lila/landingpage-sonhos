import * as opening from './openings.js';
import * as buttons from './buttons.js';
import * as dreams from './dreams.js';
import { carouselDreams } from './carousel.js';

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM content loaded');
    opening.openingScene(false);
    opening.openingCarousel();
    dreams.updateTitle();
    dreams.hoverTitle();
    dreams.animationTitle();
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

    document.getElementById('sobre-btn')
    .addEventListener('click', function() {
        opening.openingSobre();
    })

    document.getElementById('sobre-close')
    .addEventListener('click', function() {
        buttons.closeSobre();
    })

})
