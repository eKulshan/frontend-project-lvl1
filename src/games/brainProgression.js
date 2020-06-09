import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const getProgression = (progressionBeginning, progressionInterval, progressionLength) => {
  const progression = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(progressionBeginning + (i - 1) * progressionInterval);
  }

  return progression;
};

const gameRule = 'What number is missing in the progression?';
const answersToWin = 3;

const brainProgression = () => {
  const progressionBeginning = getRandomInRange(1, 100);
  const progressionInterval = getRandomInRange(1, 100);
  const progressionLength = 10;
  const progression = getProgression(progressionBeginning, progressionInterval, progressionLength);
  const index = getRandomInRange(0, 9); // Define index of number in progression to ask and hide
  const correctAnswer = `${progression[index]}`; // Memorizing number to ask
  progression[index] = '..'; // Hide number to ask
  const question = `${progression}`;

  return [question, correctAnswer];
};

const runBrainProgression = () => runBrainGames(brainProgression, answersToWin, gameRule);

export default runBrainProgression;
