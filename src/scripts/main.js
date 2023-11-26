import * as opening from './lib/openings.js';
import * as buttons from './lib/buttons.js';
import * as grid from './lib/grid.js';
import { carouselDreams } from './lib/carousel.js';

function main() {
    const play = true;
    opening.openingScene(play);
    opening.openingCarousel();
    grid.updateTitle();
    grid.hoverTitle();
    grid.animationTitle();
    carouselDreams();
    buttons.posterChoose();

    document.getElementById('dreams-btn')
    .addEventListener('click', function() {
        opening.openingDreaming(play);
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

    document.querySelectorAll('.sobre-close')
    .forEach(btn => {
        btn.addEventListener('click', function() {
        buttons.closeSobre();
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    main()
})
