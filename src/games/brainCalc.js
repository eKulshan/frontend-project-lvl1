import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const calculateExpression = (num1, num2, operator) => {
  let answer = 0;
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
    default:
      answer = 'Wrong opetator!';
  }
  return [answer];
};

const gameRule = 'What is the result of the expression?';
const answersToWin = 3;

const brainCalc = () => {
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInRange(0, 2)];
  const question = (`${num1} ${operator} ${num2} = ?`);
  const correctAnswer = `${calculateExpression(num1, num2, operator)}`;

  return [question, correctAnswer];
};

const runBrainCalc = () => runBrainGames(brainCalc, answersToWin, gameRule);

export default runBrainCalc;
