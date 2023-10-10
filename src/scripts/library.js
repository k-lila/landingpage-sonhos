export function openingScene(play) {
    if (play) {
        console.log('ligado')
        setTimeout(function() {
            document.getElementById('opening-img')
            .classList.add('opening--fadeout');
            console.log('classe adicionada')
        }, 1000);
        setTimeout(function() {
            document.getElementById('opening')
            .classList.add('opening--hidden');
            console.log('classe adicionada')
        }, 3000)
    } else {
        console.log('desligado')
        document.getElementById('opening').style.display = 'none'
    }

}

