import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let divisor = 2;
  while (divisor <= num / 2) {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeBrainIsPrime = () => {
  const question = getRandomInRange(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runBrainPrime = () => runBrainGames(makeBrainIsPrime, gameRule);

export default runBrainPrime;
