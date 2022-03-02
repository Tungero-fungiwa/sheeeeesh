function getRandomCol() {
    return '#' + Math.floor(Math.random() * 255).toString(16)
               + Math.floor(Math.random() * 255).toString(16)
               + Math.floor(Math.random() * 255).toString(16);
}


window.addEventListener("load", () => {

    setInterval(() => {
        deez = document.getElementsByTagName('h2');
        for (let i = 0; i < deez.length; i++) {
            deez[i].style.color = getRandomCol();
            
        }
    }, 300);

    document.getElementById('fuckyou').addEventListener('mouseover', (e) => {
        e.path[0].style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
        e.path[0].style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    });

})