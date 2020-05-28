import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const isPrime = (num) => {
  let answer = true;
  if (num < 2) {
    answer = false;
  }
  let divisor = 2;
  while (divisor <= num) {
    if (num % divisor === 0 && num !== divisor) {
      answer = false;
    }
    divisor += 1;
  }
  return [num, answer === true ? 'yes' : 'no'];
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameRounds = 3;

const brainIsPrime = () => {
  const gameTerms = isPrime(getRandomInRange(0, 100));
  const question = `Question: ${gameTerms[0]}`;
  const correctAnswer = `${gameTerms[1]}`;

  return [question, correctAnswer];
};

const runBrainPrime = () => runBrainGames(brainIsPrime, gameRounds, gameRule);

export default runBrainPrime;
