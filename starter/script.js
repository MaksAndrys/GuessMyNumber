'use strict';

// document.querySelector('.message').textContent = 'Correct number';
// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 21;
// document.querySelector('.guess').value = 23;

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please input a valid number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct number!';

    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.border = '7px solid';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Anonymous handler function

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.border = 'none';
});

//Zadanie - zmodyfikować kod w taki sposób, żeby zmienić (tam gdzie to możliwe) ify na ternary operatory, stworzyć funkcję displayMessage, która będzie wyświetlać odpowiedni komunikat w elemencie .message (zrobiony jest już szkielet funkcji)
