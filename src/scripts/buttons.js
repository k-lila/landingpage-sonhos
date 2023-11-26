import { classHandler } from './utilities.js';

export function backButton() {
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
export function closeCarousel() {
    classHandler(true, 'carousel', 'carousel--fadeout');
    setTimeout(function() {
        classHandler(true, 'carousel', 'vanish')
        classHandler(false, 'carousel', 'carousel--fadeout')
        classHandler(false, 'dreams', 'vanish')
        classHandler(false, 'dreams', 'dreams--fadeout')
    }, 100);
};
export function closeSobre() {
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
export function posterChoose() {
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
}
