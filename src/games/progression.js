import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const getProgression = (begining, interval, length) => {
  const progression = [];

  for (let i = 0; i <= length; i += 1) {
    progression.push(begining + i * interval);
  }

  return progression;
};

const gameRule = 'What number is missing in the progression?';

const makeBrainProgression = () => {
  const progressionBeginning = getRandomInRange(1, 100);
  const progressionInterval = getRandomInRange(1, 100);
  const progressionLength = 10;
  const progression = getProgression(progressionBeginning, progressionInterval, progressionLength);
  const askedNumIndex = getRandomInRange(0, progression.length - 1);
  const correctAnswer = `${progression[askedNumIndex]}`; // Memorizing number to ask
  progression[askedNumIndex] = '..'; // Hide number to ask
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runBrainProgression = () => runBrainGames(makeBrainProgression, gameRule);

export default runBrainProgression;
