import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const isEven = (num) => {
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return [num, answer];
};

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameRounds = 3;

const brainEven = () => {
  const gameTerms = isEven(getRandomInRange(1, 100));
  const question = `Question: ${gameTerms[0]}`;
  const correctAnswer = `${gameTerms[1]}`;

  return [question, correctAnswer];
};

const runBrainEven = () => runBrainGames(brainEven, gameRounds, gameRule);

export default runBrainEven;
