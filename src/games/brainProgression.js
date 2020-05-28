import getRandomInRange from '../getRandomInRange.js';

const getProgression = () => {
  const beginOfProgression = getRandomInRange(1, 100); // Sets the begining of progression
  const intervalOfProgression = getRandomInRange(1, 100); // Sets interval of progression
  const progression = []; // Create empty progression
  let newMemberOfProgression = beginOfProgression;

  while (progression.length <= 10) { // Fill the progression in cycle
    progression.push(newMemberOfProgression);
    newMemberOfProgression += intervalOfProgression;
  }
  return progression;
};

const brainProgression = () => {
  const gameRule = 'What number is missing in the progression?';
  const progression = getProgression();
  const index = getRandomInRange(1, 10); // Define index of number in progression to ask and hide
  const correctAnswer = `${progression[index]}`; // Memorizing number to ask
  progression[index] = '..'; // Hide number to ask
  const question = `${progression}`;

  return [gameRule, question, correctAnswer];
};

export default brainProgression;
