import getRandomInRange from '../getRandomInRange.js';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const brainGcd = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);
  const question = `Question: ${num1} ${num2}`;
  const correctAnswer = `${gcd(num1, num2)}`;

  return [gameRule, question, correctAnswer];
};

export default brainGcd;
