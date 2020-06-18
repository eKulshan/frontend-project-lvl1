import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const gameRule = 'Find the greatest common divisor of given numbers.';

const makeBrainGcd = () => {
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

const runBrainGcd = () => runBrainGames(makeBrainGcd, gameRule);

export default runBrainGcd;
