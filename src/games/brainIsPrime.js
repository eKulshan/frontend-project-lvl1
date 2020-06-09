import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let divisor = 2;
  while (divisor <= num / 2) {
    if (num % divisor === 0 && num !== divisor) {
      return false;
    }
    divisor += 1;
  }
  return true;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const answersToWin = 3;

const brainIsPrime = () => {
  const num = getRandomInRange(1, 100);
  const question = `${num}`;
  const correctAnswer = `${isPrime(num) ? 'yes' : 'no'}`;

  return [question, correctAnswer];
};

const runBrainPrime = () => runBrainGames(brainIsPrime, answersToWin, gameRule);

export default runBrainPrime;
