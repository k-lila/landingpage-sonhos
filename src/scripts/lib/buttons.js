import { classHandler } from './utilities.js';
import * as opening from './openings.js'

function backButton() {
    document.getElementById('poster').className = '';
    classHandler(true, 'poster', 'poster');
    classHandler(true, 'poster', 'vanish');
    classHandler(true, 'dreams', 'dreams--fadeout' );
    document.getElementById('dream-title').innerHTML = '';
    classHandler(false, 'dream-title', 'dreams--fadein');
    classHandler(false, 'back-btn', 'dreams--fadein');
    setTimeout(function() {
        classHandler(true, 'dreams', 'vanish');
        classHandler(false, 'dreams', 'dreams--fadeout');
        document.querySelectorAll('.grid-dreams__item').forEach(function(item) {
            item.classList.remove('grid-dreams--fadein', 'grid-dreams--fademid');
        });
        classHandler(false, 'poster', 'vanish');
        setTimeout(function() {
            classHandler(true, 'poster', 'poster--fadein')
        }, 100);
    }, 500);
};

function closeCarousel() {
    classHandler(true, 'carousel', 'carousel--fadeout');
    setTimeout(function() {
        classHandler(true, 'carousel', 'vanish')
        classHandler(false, 'carousel', 'carousel--fadeout')
        classHandler(false, 'dreams', 'vanish')
        classHandler(false, 'dreams', 'dreams--fadeout')
    }, 100);
};

function closeSobre() {
    document.getElementById('poster').className = '';
    classHandler(true, 'poster', 'poster');
    classHandler(true, 'poster', 'vanish');
    classHandler(true, 'sobre', 'sobre--fadeout');
    setTimeout(function() {
        classHandler(true, 'sobre', 'vanish');
        classHandler(false, 'sobre', 'sobre--fadein');
        classHandler(false, 'sobre', 'sobre--fadeout');
        classHandler(false, 'poster', 'vanish')
        setTimeout(function() {
            classHandler(true, 'poster', 'poster--fadein')
        }, 100);
    }, 500)
};

function posterChoose() {
    const image = document.getElementById('poster_choose')
    document.getElementById('btn-cannes').addEventListener('click', function() {
        image.src = './build/images/poster/poster_cannes.png'
    });
    document.getElementById('btn-eng').addEventListener('click', function() {
        image.src = './build/images/poster/poster_eng.png'
    });
    document.getElementById('btn-jap').addEventListener('click', function() {
        image.src = './build/images/poster/poster_jap.png'
    })
};

export function addAllButtons(play) {
    posterChoose();
    document.getElementById('back-btn')
    .addEventListener('click', function() {
        backButton();
    });
    document.getElementById('carousel-close')
    .addEventListener('click', function() {
        closeCarousel();
    });
    document.querySelectorAll('.sobre-close')
    .forEach(btn => {
        btn.addEventListener('click', function() {
        closeSobre();
        });
    });
    document.getElementById('dreams-btn')
    .addEventListener('click', function() {
        opening.openingDreaming(play);
    });
    document.getElementById('sobre-btn')
    .addEventListener('click', function() {
        opening.openingSobre();
    });
}