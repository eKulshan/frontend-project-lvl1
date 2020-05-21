import getRandomInRange from '../src/getRandomInRange.js';

const brainIsPrime = () => {
  const num = getRandomInRange(0, 100);
  let answer = true;
  if (num < 2) {
    answer = false;
  }
  let divisor = 2;
  while (divisor <= num) {
    if (num % divisor === 0 && num !== divisor) {
      answer = false;
    }
    divisor += 1;
  }
  console.log(`Question: ${num}`);
  return (answer === true) ? 'yes' : 'no';
};

export default brainIsPrime;
