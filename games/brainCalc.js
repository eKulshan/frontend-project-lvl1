import getRandomInRange from '../src/getRandomInRange.js';

const brainCalc = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInRange(0, 2)];
  const [num1, num2] = [getRandomInRange(0, 100), getRandomInRange(0, 100)];
  const question = (`${num1} ${operator} ${num2}`);
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

  console.log(question);
  return `${answer}`;
};

export default brainCalc;
