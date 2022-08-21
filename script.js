'use strict';
console.log(document.querySelector('.message').textContent);

const message = document.querySelector('.message');
const inpNum = document.querySelector('.guess');
const displayNum = document.querySelector('.number');
const displayScore = document.querySelector('.score');
var score = 20;
var found = false;
var highscore = 0;

const secNumChange = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
var secretNumber = secNumChange();
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(inpNum.value);
  Check(guess);
});

const Check = function (guess) {
  if (score > 1 && !found) {
    if (guess == 0) {
      message.textContent = 'No input';
    } else if (guess != secretNumber) {
      message.textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayScore.textContent = --score;
    } else {
      message.textContent = '🏆 Correct Number';
      displayNum.textContent = secretNumber;
      found = true;
      document.querySelector('body').style.backgroundColor = '#60b347';
      displayNum.style.width = '20rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
  } else if (!found) {
    message.textContent = '😵 Game Over! You Lost';
    displayScore.textContent = 0;
    document.querySelector('body').style.backgroundColor = '#cc1100';
  }
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  message.textContent = 'Start guessing...';
  displayNum.textContent = '?';
  found = false;
  document.querySelector('body').style.backgroundColor = '#222';
  displayNum.style.width = '15rem';
  displayScore.textContent = score;
  secretNumber = secNumChange();
  inpNum.value = '';
});
