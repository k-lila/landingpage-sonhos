
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
    document.getElementById('meio').classList.add('grid-dreams--fademid');
    document.getElementById('dream-title').classList.add('dreams--fadein');
    document.getElementById('back-btn').classList.add('dreams--fadein');
    var list_img = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = list_img.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list_img[i], list_img[j]] = [list_img[j], list_img[i]];
    };
    const time_fade = 400;
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

export function openingCarousel() {
    const list_titles = [
        'Um raio de sol através da chuva',
        'O jardim das pessegueiras',
        'A tempestade',
        'O túnel',
        'Corvos',
        'Monte Fuji em chamas',
        'O demônio que chora',
        'O vilarejo dos moinhos'
    ];
    for (let i = 1; i < 9; i++) {
        document.getElementById(`img-dream-${i}`)
        .addEventListener('click', function() {
            document.getElementById('carousel-title').innerHTML = list_titles[i - 1];
            document.getElementById('dreams').classList.add('dreams--fadeout')
            setTimeout(function() {
                document.getElementById('dreams').classList.add('vanish')
            }, 500);
            setTimeout(function() {
                document.getElementById('carousel').classList.remove('vanish')
            }, 600)
        });
    }
}