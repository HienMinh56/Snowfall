function snows() {
    let e = document.createElement('div');
    e.className = "snow";
    document.body.appendChild(e);

    e.style.left = Math.random() * + innerWidth + 'px';

    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 12 + size + 'px';
    e.style.animationDuration = 3 + duration + 's';

    setTimeout(function () {
        document.body.removeChild(e);
    }, 5000);
}

setInterval(function () {
    snows();
}, 100);