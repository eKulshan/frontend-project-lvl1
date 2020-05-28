import getRandomInRange from '../getRandomInRange.js';

const isEven = () => {
  const num = getRandomInRange(1, 100);
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return [num, answer];
};


const brainEven = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameTerms = isEven();
  const question = `Question: ${gameTerms[0]}`;
  const correctAnswer = `${gameTerms[1]}`;

  return [gameRule, question, correctAnswer];
};
export default brainEven;
