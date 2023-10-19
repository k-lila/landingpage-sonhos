
export function openingScene(play) {
    if (play) {
        var openingSpan = document.getElementById('opening-span');
        openingSpan.classList.remove('vanish');
        setTimeout(function() {
            openingSpan.classList.add('opening--fadeout');
        }, 1000)
        setTimeout(function() {
            document.getElementById('poster').classList.remove('vanish');
            setTimeout(function() {
                document.getElementById('poster').classList.add('poster--fadein');
            }, 100)
            openingSpan.classList.add('vanish');
        }, 3000)
    } else {
        document.getElementById('poster').classList.remove('vanish');
        setTimeout(function() {
            document.getElementById('poster').classList.add('poster--fadein');
        }, 100)
    }
}

function showDreams() {
    document.getElementById('meio').classList.add('grid-dreams--fademid')
    var list_img = [1, 2, 3, 4, 5, 6, 7, 8]
    for (let i = list_img.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list_img[i], list_img[j]] = [list_img[j], list_img[i]];
    }
    const time_fade = 400
    list_img.forEach(function(num, index) {
        setTimeout(function() {
            document.getElementById(`img-dream-${num}`).classList.add('grid-dreams--fadein');
        }, time_fade * (index + 1))
    })
}

export function openingDreaming(play) {
    if (play) {
        document.getElementById('poster').classList.add('poster--fadeout');
        var dreamingSpan = document.getElementById('dreaming-span');
        setTimeout(function() {
            document.getElementById('poster').classList.add('vanish');
            dreamingSpan.classList.remove('vanish');
            setTimeout(function() {
                dreamingSpan.classList.add('dreaming--fadein');
            }, 100)
        }, 500);

        setTimeout(function() {
            dreamingSpan.classList.add('dreaming--fadeout');
        }, 1500);

        setTimeout(function() {
            dreamingSpan.className = ''
            dreamingSpan.classList.add('vanish', 'dreaming');
            document.getElementById('dreams').classList.remove('vanish');            
            setTimeout(function() {
                showDreams();
            }, 100)
        }, 3000)

    } else {
        document.getElementById('poster').classList.add('poster--fadeout');
        setTimeout(function() {
            document.getElementById('poster').classList.add('vanish');
            document.getElementById('dreams').classList.remove('vanish');
            setTimeout(function() {
                showDreams()
            }, 100)
        }, 500);
    }
}

export function backButton() {
    document.getElementById('poster').className = '';
    document.getElementById('poster').classList.add('poster', 'vanish');
    document.getElementById('dreams').classList.add('dreams--fadeout');

    setTimeout(function() {
        document.getElementById('dreams').classList.add('vanish');
        document.getElementById('dreams').classList.remove('dreams--fadeout');

        document.querySelectorAll('.grid-dreams__item').forEach(function(item) {
            item.classList.remove('grid-dreams--fadein', 'grid-dreams--fademid')
        });

        document.getElementById('poster').classList.remove('vanish');
        setTimeout(function() {
            document.getElementById('poster').classList.add('poster--fadein');
        }, 100);
    }, 500);
}
