export function backButton() {
    document.getElementById('poster').className = '';
    document.getElementById('poster').classList.add('poster', 'vanish');
    document.getElementById('dreams').classList.add('dreams--fadeout');
    document.getElementById('dream-title').innerHTML = '';
    document.getElementById('dream-title').classList.remove('dreams--fadein');
    document.getElementById('dream-title').classList.remove('dreams--fadein');
    document.getElementById('back-btn').classList.remove('dreams--fadein');

    setTimeout(function() {
        document.getElementById('dreams').classList.add('vanish');
        document.getElementById('dreams').classList.remove('dreams--fadeout');

        document.querySelectorAll('.grid-dreams__item').forEach(function(item) {
            item.classList.remove('grid-dreams--fadein', 'grid-dreams--fademid');
        });

        document.getElementById('poster').classList.remove('vanish');
        setTimeout(function() {
            document.getElementById('poster').classList.add('poster--fadein');
        }, 100);
    }, 500);
};

export function closeCarousel() {
    document.getElementById('carousel').classList.add('carousel--fadeout');
    setTimeout(function() {
        document.getElementById('carousel').classList.add('vanish');
        document.getElementById('carousel').classList.remove('carousel--fadeout');
        document.getElementById('dreams').classList.remove('vanish', 'dreams--fadeout');
    }, 100);
}
