#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/greeting.js';
import getRandomInRange from '../src/getRandomInRange.js';

const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
  const number = getRandomInRange(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const playerAnswer = readlineSync.question('Your answer: ');

  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
    correctAnswersCount += 1;
  } else if (playerAnswer !== correctAnswer) {
    console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${name}!`);
    break;
  }
}
if (correctAnswersCount === 3) {
  console.log(`Congratulations, ${name}!`);
}
