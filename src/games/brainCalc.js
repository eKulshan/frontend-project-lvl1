import getRandomInRange from '../getRandomInRange.js';

const calc = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInRange(0, 2)];
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
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

const brainCalc = () => {
  const gameRule = 'What is the result of the expression?';
  const gameTerms = calc();
  const question = (gameTerms[0]);
  const correctAnswer = `${gameTerms[1]}`;

  return [gameRule, question, correctAnswer];
};

export default brainCalc;
