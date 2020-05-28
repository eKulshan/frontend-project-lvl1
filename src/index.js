import readlineSync from 'readline-sync';
import greeting from './greeting.js';

const brainGames = (game) => {
  const playerName = greeting(); // Greets player and gets his name
  const gameRules = (game())[0];
  console.log(gameRules); // On game run declare game rules
  const answersToWin = 3; // Define how many correct answers player must give to win the game
  let correctAnswersCount = 0; // Counts player correct answers

  while (correctAnswersCount < answersToWin) {
    const gameTerms = game();
    const question = (gameTerms[1]);
    console.log(question); // Declare game question
    const correctAnswer = (gameTerms[2]); // Gets correct answer from chosen game
    const playerAnswer = readlineSync.question('Your answer: '); // Gets player answer

    if (playerAnswer === correctAnswer) { // Compare correct and player answers
      console.log('Correct!');
      correctAnswersCount += 1;
    } else if (playerAnswer !== correctAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${playerName}!`);
      break;
    }
  }
  if (correctAnswersCount === answersToWin) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export default brainGames;
