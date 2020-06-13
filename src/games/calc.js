import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error('Wrong expression operator!');
  }
};

const gameRule = 'What is the result of the expression?';

const makeBrainCalc = () => {
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInRange(0, operators.length - 1)];
  const question = (`${num1} ${operator} ${num2}`);
  const correctAnswer = String(calculateExpression(num1, num2, operator));

  return [question, correctAnswer];
};

const runBrainCalc = () => runBrainGames(makeBrainCalc, gameRule);

export default runBrainCalc;
