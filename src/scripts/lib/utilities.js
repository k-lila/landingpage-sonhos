export function classHandler(removeAdd, id, classes) {
    if (removeAdd) {
        document.getElementById(id).classList.add(classes)
    } else {
        document.getElementById(id).classList.remove(classes)
    }
}

function hoverTitle() {
    const btn_to_grid = document.getElementById('dreams-btn')
    btn_to_grid.addEventListener('mouseover', function() {
        classHandler(true, 'title-poster', 'title-poster--title-hover');
    });
    btn_to_grid.addEventListener('touchstart', function() {
        classHandler(true, 'title-poster', 'title-poster--title-hover');
    });
    btn_to_grid.addEventListener('mouseleave', function() {
        classHandler(false, 'title-poster', 'title-poster--title-hover');
    });
    btn_to_grid.addEventListener('touchend', function() {
        classHandler(false, 'title-poster', 'title-poster--title-hover')
    })
}

function animationTitle() {
    const h1Tags = document.getElementById('dreams-btn').querySelectorAll('h1');
    h1Tags.forEach(function(tag) {
        const numeroAleatorio = Math.floor(Math.random() * 5) + 3;
        tag.style.animation = `levitate ${numeroAleatorio}s infinite`
    })
}

function updateGridTitle() {
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
        const img_dream = document.getElementById(`img-dream-${index + 1}`)
        img_dream.addEventListener('mouseover', function() {
            document.getElementById('dream-title').innerHTML = item
        })
        img_dream.addEventListener('touchstart', function() {
            document.getElementById('dream-title').innerHTML = item
        })
    })
    document.getElementById('meio').addEventListener('mouseover', function() {
        document.getElementById('dream-title').innerHTML = 'voltar'
    })
    document.getElementById('meio').addEventListener('touchstart', function() {
        document.getElementById('dream-title').innerHTML = 'voltar'
    })
}

export function titleUtils() {
    hoverTitle();
    animationTitle();
    updateGridTitle();
}