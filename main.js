const app = document.getElementById('typewriter');

const typewriter = new typewriter(app, {
    lopp: true,
    delay:75
});

typewriter
.typewriter('La capital del Sol')
.pauseFor(200)
.start();

