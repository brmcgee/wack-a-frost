let squares = document.querySelectorAll('.square'); //all squares
const mole = document.querySelector('.mole');
const timeLeft = document.getElementById('time-left');
const score = document.getElementById('score');   
const playButton = document.querySelector('.button');

let hitPosition;
let currentTime = 60;
let timerId = null;

playButton.addEventListener('click', newGame);

result = 0;


//get random square to put mole
function randomSquare() {
    squares.forEach(square => {   //for each square do
        square.classList.remove('mole'); //remove class mole if exists
    })
                     //generates random number
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

moveMole();

// interval to produce mole
function moveMole() {
    timerId = setInterval(randomSquare, 500);
}




function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert(`GAME OVER! Your final score is ${result}!`);
    }
}

let countDownTimerId = setInterval(countDown, 1000);

function newGame() {
    document.location.reload();
}

