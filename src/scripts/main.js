import { openingScene } from './lib/openings.js';
import { addAllButtons } from './lib/buttons.js';
import { titleUtils } from './lib/utilities.js'
import { carousel } from './lib/carousel.js';

function main(play) {
    openingScene(play);
    addAllButtons(play);
    titleUtils();
    carousel();
}

document.addEventListener("DOMContentLoaded", function() {
    main(true);
})
