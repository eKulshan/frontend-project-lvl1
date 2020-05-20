import getRandomInRange from '../src/getRandomInRange.js';

const brainProgression = () => {
  const beginOfProgression = getRandomInRange(1, 100); // Sets the begining of progression
  const intervalOfProgression = getRandomInRange(1, 100); // Sets interval of progression
  const index = getRandomInRange(1, 10); // Define index of number in progression to ask and hide
  const progression = []; // Create empty progression
  let newMemberOfProgression = beginOfProgression;

  while (progression.length <= 10) { // Fill the progression in cycle
    progression.push(newMemberOfProgression);
    newMemberOfProgression += intervalOfProgression;
  }
  const answer = progression[index]; // Memorizing number to ask
  progression[index] = '..'; // Hide number to ask
  const question = progression;
  console.log(question.join(' '));
  return `${answer}`;
};

export default brainProgression;
