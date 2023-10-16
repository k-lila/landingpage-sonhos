export function windowSize() {
    return [window.innerWidth, window.innerHeight]
}

export function openingScene(play) {
    if (play) {
        var openingSpan = document.getElementById('opening-span')
        if (window.innerWidth > window.innerHeight) {
            openingSpan.classList.add('opening--byheight')
        } else {
            openingSpan.classList.add('opening--bywidth')
        };
        openingSpan.classList.remove('vanish');
        setTimeout(function() {
            openingSpan.classList.add('opening--fadeout')
        }, 1000)
        setTimeout(function() {
            document.getElementById('poster').classList.add('poster--fadein');
            openingSpan.classList.add('vanish');
        }, 3000)
    }
}

export function openingDreaming(play) {
    if (play) {

        document.getElementById('poster').classList.add('poster--fadeout');
        setTimeout(function() {
            document.getElementById('poster').classList.add('vanish');
        }, 500)

        var dreamingSpan = document.getElementById('dreaming-span')
        if (window.innerWidth > window.innerHeight) {
            dreamingSpan.classList.add('dreaming--byheight')
        } else {
            dreamingSpan.classList.add('dreaming--bywidth')
        };

        setTimeout(function() {
            dreamingSpan.classList.add('dreaming--fadein')
            dreamingSpan.classList.remove('vanish')
        }, 1500)
        setTimeout(function() {
            document.getElementById('dreaming-span')
            .classList.add('dreaming--fadeout')
        }, 2000)
    }
}
