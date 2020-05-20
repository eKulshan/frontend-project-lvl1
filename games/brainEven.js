import getRandomInRange from '../src/getRandomInRange.js';

const brainEven = () => {
  const question = getRandomInRange(1, 100);

  const answer = question % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${question}`);
  return answer;
};

export default brainEven;
