import { classHandler } from './utilities.js';
// abertura da página
export function openingScene(play) {
    var posterClasses = document.getElementById('poster').classList
    if (play) {
        classHandler(false, 'opening-span', 'vanish');
        setTimeout(function() {
            classHandler(true, 'opening-span', 'opening--fadeout');
        }, 1000)
        setTimeout(function() {
            classHandler(false, 'poster', 'vanish');
            setTimeout(function() {
                classHandler(true, 'poster', 'poster--fadein');
            }, 100)
            classHandler(true, 'opening-span', 'vanish');
        }, 3000)
    } else {
        classHandler(false, 'poster', 'vanish');
        setTimeout(function() {
            classHandler(true, 'poster', 'poster--fadein');
        }, 100)
    }
}
// adiciona o fadein para cada sonho, será usada na função seguinte
function showDreams() {
    classHandler(true, 'meio', 'grid-dreams--fademid');
    classHandler(true, 'dream-title', 'dreams--fadein');
    classHandler(true, 'back-btn', 'dreams--fadein');
    var list_img = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = list_img.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list_img[i], list_img[j]] = [list_img[j], list_img[i]];
    };
    const time_fade = 300;
    list_img.forEach(function(num, index) {
        setTimeout(function() {
            classHandler(true, `img-dream-${num}`, 'grid-dreams--fadein')
        }, time_fade * (index + 1))
    })
}
// função de abertura da seção dos sonhos
export function openingDreaming(play) {
    if (play) {
        classHandler(true, 'poster', 'poster--fadeout');
        setTimeout(function() {
            classHandler(true, 'poster', 'vanish');
            classHandler(false, 'dreaming-span', 'vanish');
            setTimeout(function() {
                classHandler(true, 'dreaming-span', 'dreaming--fadein');
            }, 100)
        }, 500);
        setTimeout(function() {
            classHandler(true, 'dreaming-span', 'dreaming--fadeout');
        }, 1500);
        setTimeout(function() {
            document.getElementById('dreaming-span').className = '';
            classHandler(true, 'dreaming-span', 'vanish');
            classHandler(true, 'dreaming-span', 'dreaming');
            classHandler(false, 'dreams', 'vanish');
            setTimeout(function() {
                showDreams();
            }, 100)
        }, 3000)
    } else {
        document.getElementById('poster').classList.add('poster--fadeout');
        setTimeout(function() {
            classHandler(true, 'poster', 'vanish');
            classHandler(false, 'dreams', 'vanish');
            setTimeout(function() {
                showDreams()
            }, 100)
        }, 500);
    }
}
// carousel, abertura e título
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
            classHandler(true, 'dreams', 'dreams--fadeout');
            setTimeout(function() {
                classHandler(true, 'dreams', 'vanish');
            }, 500);
            setTimeout(function() {
                classHandler(false, 'carousel', 'vanish');
            }, 600)
        });
    }
}
// abertura da seção sobre
export function openingSobre() {
    classHandler(true, 'poster', 'poster--fadeout');
    setTimeout(function() {
        classHandler(true, 'poster', 'vanish');
        classHandler(false, 'sobre', 'vanish');
        setTimeout(function() {
            classHandler(true, 'sobre', 'sobre--fadein');
        }, 100)
    }, 500)
}