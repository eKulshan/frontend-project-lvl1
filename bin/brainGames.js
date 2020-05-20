#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/greeting.js';
import brainEven from '../games/brainEven.js';
import brainCalc from '../games/brainCalc.js';
import brainGcd from '../games/brainGcd.js';
import gamesRules from '../games/gamesRules.js';
import brainProgression from '../games/brainProgression.js';

const games = [brainEven, brainCalc, brainGcd, brainProgression]; // Array of available games
const playerName = greeting(); // Greets player and gets his name
const gameIndex = readlineSync.keyInSelect(['BrainEven', 'BrainCalc', 'BrainGCD', 'BrainProgression'], 'Which game would you like to play?'); // Choose a game to play
console.log(gamesRules[gameIndex]); // On game run declare game rules

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
