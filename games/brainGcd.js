import getRandomInRange from '../src/getRandomInRange.js';

const brainGcd = () => {
  const [num1, num2] = [getRandomInRange(0, 100), getRandomInRange(0, 100)];
  let divisor = Math.max(num1, num2);

  while (divisor >= 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      break;
    }
    divisor -= 1;
  }

  console.log(`Question: ${num1} ${num2}`);
  return `${divisor}`;
};

export default brainGcd;
