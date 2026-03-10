const form = document.querySelector('form');
const randomNumber = Math.floor(Math.random() * 100) + 1;

let counter = 10;
let gameOver = false;

const previousGuesses = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (gameOver) return;

  const guessInput = Number(document.querySelector('#guessField').value);

  previousGuesses.push(guessInput);

  //displaying previous guesses
  const guesses = document.querySelector('.guesses');
  guesses.textContent = previousGuesses.join(', ');

  const resultDisplay = document.querySelector('.lowOrHi');

  if (randomNumber === guessInput) {
    resultDisplay.textContent = 'Correct!';
    gameOver = true;
    document.querySelector('#guessField').disabled = true;
    return;
  } else if (guessInput > randomNumber) {
    resultDisplay.textContent = 'Try lower';
  } else {
    resultDisplay.textContent = 'Try higher';
  }

  //updating counter everytime submit is hit and updated counter is shown on page
  counter--;
  const lastResult = document.querySelector('.lastResult');
  lastResult.textContent = counter;

  if (counter === 0) {
    resultDisplay.textContent = `Game Over! Number was ${randomNumber}`;
    endGame();
  }
});

function endGame() {
  gameOver = true;

  const input = document.querySelector('#guessField');
  input.disabled = true;

  const restartButton = document.createElement('button');
  restartButton.textContent = 'Play Again';
  restartButton.attributes('id', 'restartGame');
  // restartButton.id = 'restartGame';

  const wrapper = document.querySelector('#wrapper');
  wrapper.appendChild(restartButton);

  restartButton.addEventListener('click', newGame);
}

function newGame() {}
