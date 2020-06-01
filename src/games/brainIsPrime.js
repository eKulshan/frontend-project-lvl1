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
  return answer;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const answersToWin = 3;

const brainIsPrime = () => {
  const num = getRandomInRange(1, 100);
  const question = `Question: ${num}`;
  const correctAnswer = `${isPrime(num) === true ? 'yes' : 'no'}`;

  return [question, correctAnswer];
};

const runBrainPrime = () => runBrainGames(brainIsPrime, answersToWin, gameRule);

export default runBrainPrime;
