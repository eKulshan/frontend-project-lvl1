import getRandomInRange from '../getRandomInRange.js';

const isPrime = () => {
  const num = getRandomInRange(0, 100);
  let answer = 'yes';
  if (num < 2) {
    answer = 'no';
  }
  let divisor = 2;
  while (divisor <= num) {
    if (num % divisor === 0 && num !== divisor) {
      answer = 'no';
    }
    divisor += 1;
  }
  return [num, answer];
};

const brainIsPrime = () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameTerms = isPrime();
  const question = `Question: ${gameTerms[0]}`;
  const correctAnswer = `${gameTerms[1]}`;

  return [gameRule, question, correctAnswer];
};

export default brainIsPrime;
