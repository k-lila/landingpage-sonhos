import { classHandler } from './utilities.js';

export function updateTitle() {
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
    list_titles.forEach(function(item, index) {
        document.getElementById(`img-dream-${index + 1}`).addEventListener('mouseover', function() {
            document.getElementById('dream-title').innerHTML = item
        })
    })
    document.getElementById('meio').addEventListener('mouseover', function() {
        document.getElementById('dream-title').innerHTML = 'voltar'
    })
}

export function hoverTitle() {
    document.getElementById('dreams-btn').addEventListener('mouseover', function() {
        classHandler(true, 'title-poster', 'poster--title-hover');
        console.log('in')
    });
    document.getElementById('dreams-btn').addEventListener('mouseleave', function() {
        classHandler(false, 'title-poster', 'poster--title-hover');
        console.log('out')
    })
}

export function animationTitle() {
    const h1Tags = document.getElementById('dreams-btn').querySelectorAll('h1');
    h1Tags.forEach(function(tag) {
        const numeroAleatorio = Math.floor(Math.random() * 5) + 3;
        tag.style.animation = `levitate ${numeroAleatorio}s infinite`
    })
}
