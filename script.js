'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
  if (score > 1) {
    let guess = Number(document.querySelector('.guess').value);

    // if no number
    if (!guess) {
      document.querySelector('.message').textContent = '🤷‍♂️ No Number';
      // if guessed correctly
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '✔ Correct!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      // getting the highscore
      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
      }
      // if guess is high or too low
    } else if (guess !== secretNumber) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '🤷‍♂️ Too High!' : '🤷‍♂️ Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'Game over.';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // reset the secret number
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // reset the number back to "?"
  document.querySelector('.number').textContent = '?';
  // reset the background color
  document.querySelector('body').style.backgroundColor = '#222';
  // reset the message to what it was before
  document.querySelector('.message').textContent = 'Start guessing...';
  // reset the score and the text output
  score = 20;
  document.querySelector('.score').textContent = score;
  // reset the box style back to it's original size
  document.querySelector('.number').style.width = '15rem';
  // reset the input to "0"
  document.querySelector('.guess').value = '';
});
