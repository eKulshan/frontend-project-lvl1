import brainEven from './brainEven.js';
import brainCalc from './brainCalc.js';
import brainGcd from './brainGcd.js';
import brainProgression from './brainProgression.js';
import brainIsPrime from './brainIsPrime.js';

// Array of each game rules
const brainEvenRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainCalcRule = 'What is the result of the expression?';
const brainGcdRule = 'Find the greatest common divisor of given numbers.';
const brainProgressionRule = 'What number is missing in the progression?';
const brainIsPrimeRule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export const gamesRules = [brainEvenRule, brainCalcRule, brainGcdRule, brainProgressionRule, brainIsPrimeRule];

// Array of available games
export const games = [brainEven, brainCalc, brainGcd, brainProgression, brainIsPrime];

// Array of game names for game select menu
export const gameNames = ['BrainEven', 'BrainCalc', 'BrainGCD', 'BrainProgression', 'BrainIsPrime'];
