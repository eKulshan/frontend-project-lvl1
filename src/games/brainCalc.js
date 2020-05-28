import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const calc = (num1, num2, operator) => {
  const expression = (`${num1} ${operator} ${num2} = ?`);
  let answer = 0;

  // eslint-disable-next-line default-case
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
  }
  return [expression, answer];
};

const gameRule = 'What is the result of the expression?';
const gameRounds = 3;

const brainCalc = () => {
  const operators = ['+', '-', '*'];
  const gameTerms = calc(getRandomInRange(0, 100),
    getRandomInRange(0, 100), operators[getRandomInRange(0, 2)]);
  const question = (gameTerms[0]);
  const correctAnswer = `${gameTerms[1]}`;

  return [question, correctAnswer];
};

const runBrainCalc = () => runBrainGames(brainCalc, gameRounds, gameRule);

export default runBrainCalc;
