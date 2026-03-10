const form = document.querySelector('form');
let randomNumber = Math.floor(Math.random() * 100) + 1;

let counter = 10;
let gameOver = false;
let gamesPlayed = 0;
let wins = 0;
let losses = 0;

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
    endGame();
  }
  resultDisplay.textContent = guessInput > randomNumber ? 'Try lower' : 'Try higher';

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

  const guessInput = document.querySelector('#guessField');
  guessInput.disabled = true;

  const restartButton = document.createElement('button');
  restartButton.textContent = 'Play Again';
  restartButton.setAttribute('id', 'restartGame');
  // restartButton.id = 'restartGame';

  const wrapper = document.querySelector('#wrapper');
  if (!document.querySelector('#restartGame')) {
    wrapper.appendChild(restartButton);
  }

  restartButton.addEventListener('click', newGame);
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  counter = 10;
  gameOver = false;

  previousGuesses.length = 0;

  document.querySelector('.guesses').textContent = '';
  document.querySelector('.lastResult').textContent = counter;
  document.querySelector('.lowOrHi').textContent = '';

  const guessInput = document.querySelector('#guessField');
  guessInput.disabled = false;
  guessInput.value = '';

  document.querySelector('#restartGame').remove();
}

//ayoooo