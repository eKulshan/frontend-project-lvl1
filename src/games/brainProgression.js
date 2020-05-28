import runBrainGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const getProgression = (beginOfProgression, intervalOfProgression) => {
  const progression = []; // Create empty progression
  let newMemberOfProgression = beginOfProgression;

  while (progression.length <= 10) { // Fill the progression in cycle
    progression.push(newMemberOfProgression);
    newMemberOfProgression += intervalOfProgression;
  }
  return progression;
};

const gameRule = 'What number is missing in the progression?';
const gameRounds = 3;

const brainProgression = () => {
  const progression = getProgression(getRandomInRange(1, 100), getRandomInRange(1, 100));
  const index = getRandomInRange(1, 10); // Define index of number in progression to ask and hide
  const correctAnswer = `${progression[index]}`; // Memorizing number to ask
  progression[index] = '..'; // Hide number to ask
  const question = `${progression}`;

  return [question, correctAnswer];
};

const runBrainProgression = () => runBrainGames(brainProgression, gameRounds, gameRule);

export default runBrainProgression;
