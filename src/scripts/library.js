export function openingScene(play) {
    if (play) {
        var device_width = window.innerWidth;
        var device_height = window.innerHeight;
        const reference = document.getElementById('opening');
        if (device_width > device_height) {
            reference.classList.add('opening--byheight')
        } else {
            reference.classList.add('opening--bywidth')
        };
        reference.classList.remove('--hidden');
        setTimeout(function() {
            document.getElementById('opening-img')
            .classList.add('--fadeout');
        }, 1000);
        setTimeout(function() {
            document.getElementById('opening').style.display = 'none';
            document.getElementById('container').classList.remove('--vanish');
        }, 3000)
    }
}

export function openingDreaming(play) {
    var device_width = window.innerWidth;
    var device_height = window.innerHeight;
    const reference = document.getElementById('dreaming');
    const elementFadeout = document.getElementById('poster');

    if (play) {
        // if (device_width > device_height) {
        //     reference.classList.add('dreaming--byheight')
        // } else {
        //     reference.classList.add('dreaming--bywidth')
        // };

        elementFadeout.classList.add('--fastout')

    //     reference.classList.remove('--hidden');
    //     setTimeout(function() {
    //         document.getElementById('dreaming')
    //         .classList.add('--fadeout');
    //     }, 1000);
    //     setTimeout(function() {
    //         document.getElementById('dreaming').style.display = 'none'
    //     }, 3000)
    // } else {
    //     document.getElementById('dreaming').style.display = 'none'
    }
}