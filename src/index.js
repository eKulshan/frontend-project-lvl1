import readlineSync from 'readline-sync';
import greeting from './greeting.js';

const runBrainGames = (game, gameRounds, gameRule) => {
  const playerName = greeting(); // Greets player and gets his name
  console.log(gameRule); // On game run declare game rules
  const answersToWin = gameRounds; // Define how many correct answers player must give to win
  let correctAnswersCount = 0; // Counts player correct answers

  while (correctAnswersCount < answersToWin) {
    const gameTerms = game();
    const question = (gameTerms[0]);
    console.log(question); // Declare game question
    const correctAnswer = (gameTerms[1]); // Gets correct answer from chosen game
    const playerAnswer = readlineSync.question('Your answer: '); // Gets player answer

    if (playerAnswer === correctAnswer) { // Compare correct and player answers
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${playerName}!`);
      return;
    }
  }
  if (correctAnswersCount === answersToWin) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export default runBrainGames;
