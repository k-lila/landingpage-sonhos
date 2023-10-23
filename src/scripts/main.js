import * as opening from './openings.js';
import * as buttons from './buttons.js';
import * as dreams from './dreams.js';

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM content loaded');
        opening.openingScene(false);
    
    document.getElementById('dreams-btn')
    .addEventListener('click', function() {
        opening.openingDreaming(false);
        dreams.updateTitle()
    })

    document.getElementById('back-btn')
    .addEventListener('click', function() {
        buttons.backButton();
    })

})
