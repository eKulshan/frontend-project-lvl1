import getRandomInRange from '../src/getRandomInRange.js';

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // On game run declare game rules
  const question = getRandomInRange(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${question}`);
  return answer;
};

export default brainEven;
