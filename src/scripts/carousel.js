
function imgBtn(soma, num) {
    var imgSrc = document.getElementById('carousel-img').src;
    var imgAtual = imgSrc.split('/').slice(-1)[0];
    var numAtual = parseInt(imgAtual.split('-')[1].replace('.png', ''));
    if (soma) {
        numAtual += 1
    } else {
        numAtual -= 1
    };
    if (numAtual === 0) {
        numAtual = 10
    } else if (numAtual === 11) {
        numAtual = 1
    };
    var newImg = `./build/images/sonhos/sonho${num}/sonho${num}-${numAtual}.png`;
    document.getElementById('carousel-img').src = newImg;
};

export function carouselDreams() {
    var numImg = 0;
    for (let i = 1; i < 9; i++) {
        document.getElementById(`img-dream-${i}`)
        .addEventListener('click', function() {
            numImg = i;
            document.getElementById('carousel-img').src = `./build/images/sonhos/sonho${numImg}/sonho${numImg}-${1}.png`;
        })
    };
    document.getElementById('slide-prev')
    .addEventListener('click', function() {
        imgBtn(false, numImg);
    });
    document.getElementById('slide-next')
    .addEventListener('click', function() {
        imgBtn(true, numImg);
    })
};