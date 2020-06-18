import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const isEven = (num) => num % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeBrainEven = () => {
  const question = getRandomInRange(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runBrainEven = () => runBrainGames(makeBrainEven, gameRule);

export default runBrainEven;
