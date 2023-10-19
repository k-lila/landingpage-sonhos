import * as lib from './library.js';

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM content loaded');
        lib.openingScene(true);
    
    document.getElementById('dreams-btn')
    .addEventListener('click', function() {
        lib.openingDreaming(true);
    })

    document.getElementById('back-btn')
    .addEventListener('click', function() {
        lib.backButton();
    })

})
