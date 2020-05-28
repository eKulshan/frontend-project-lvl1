import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return [num1];
  }
  const answer = getGcd(num2, num1 % num2).pop();
  return [num1, num2, answer];
};

const gameRule = 'Find the greatest common divisor of given numbers.';
const gameRounds = 3;

const brainGcd = () => {
  const gameTerms = getGcd(getRandomInRange(1, 100), getRandomInRange(1, 100));
  const question = `Question: ${gameTerms[0]} ${gameTerms[1]}`;
  const correctAnswer = `${gameTerms[2]}`;

  return [question, correctAnswer];
};

const runBrainGcd = () => runBrainGames(brainGcd, gameRounds, gameRule);

export default runBrainGcd;
