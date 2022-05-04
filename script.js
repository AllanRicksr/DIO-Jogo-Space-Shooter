const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-game');


//funcao movimento e disparo
function flyShip(event) {
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    } else if (event.key === " ") {
        event.preventDefault();
        fireLaser();
    }
}

//função de subir
function moveUp() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if (topPosition === "0px") {
        return
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = `${position}px`;
    }
}

//função de descer
function moveDown() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if (topPosition === "510px") {
        return
    } else {
        let position = parseInt(topPosition);
        position += 50;
        yourShip.style.top = `${position}px`;
    }
}

//função de tiro
function fireLaser() {
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser();
}

function createLaserElement() {
    let xPositoin = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
    let yPositoin = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
    let newLaser = document.createElement('img');
    newLaser.src = 'img/shoot.png';
    newLaser.classList.add('laser');
    newLaser.style.left = `${xPositoin}px`;
    newLaser.style.top = `${yPositoin = 10}px`;
    return new laser
}

function moveLaser() {

}

window.addEventListener('keydown', flyShip);