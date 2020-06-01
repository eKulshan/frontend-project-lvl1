import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const isEven = (num) => num % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const answersToWin = 3;

const brainEven = () => {
  const num = getRandomInRange(1, 100);
  const question = `${num}`;
  const correctAnswer = `${isEven(num) ? 'yes' : 'no'}`;

  return [question, correctAnswer];
};

const runBrainEven = () => runBrainGames(brainEven, answersToWin, gameRule);

export default runBrainEven;
