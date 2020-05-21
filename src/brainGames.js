import readlineSync from 'readline-sync';
import greeting from './greeting.js';
import { games, gameNames, gamesRules } from '../games/gamesAndRules.js';

const brainGames = () => {
  const playerName = greeting(); // Greets player and gets his name
  const gameIndex = readlineSync.keyInSelect(gameNames, 'Which game would you like to play?'); // Choose a game to play
  if (gameIndex === -1) { // If player choose 'Cancel' option in game select, say goodbay & exit
    console.log(`See you later, ${playerName}!`);
    return;
  }

  console.log(gamesRules[gameIndex]); // On game run declare game rules

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const correctAnswer = (games[gameIndex])(); // Gets correct answer from chosen game
    const playerAnswer = readlineSync.question('Your answer: '); // Gets player answer

    if (playerAnswer === correctAnswer) { // Compare correct and players answers
      console.log('Correct!');
      correctAnswersCount += 1;
    } else if (playerAnswer !== correctAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${playerName}!`);
      break;
    }
  }
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export default brainGames;
