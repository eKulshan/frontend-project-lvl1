#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/greeting.js';
import brainEven from '../games/brainEven.js';
import brainCalc from '../games/brainCalc.js';

const games = [brainEven, brainCalc]; // Array of available games
const playerName = greeting();
const gameIndex = readlineSync.keyInSelect(['BrainEven', 'BrainCalc'], 'Which game would you like to play?'); // Choose a game to play

let correctAnswersCount = 0;
while (correctAnswersCount < 3) {
  const correctAnswer = (games[gameIndex])();
  const playerAnswer = readlineSync.question('Your answer: ');

  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
    correctAnswersCount += 1;
  } else if (playerAnswer !== correctAnswer) {
    console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${playerName}!`);
    break;
  }
}
if (correctAnswersCount === 3) {
  console.log(`Congratulations, ${playerName}!`);
}
