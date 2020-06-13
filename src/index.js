import readlineSync from 'readline-sync';

const runBrainGames = (runGame, gameRule) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(gameRule); // On game run declare game rules
  let correctAnswersCount = 0; // Counts player correct answers
  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
    const [question, correctAnswer] = runGame();
    console.log(`Question: ${question}`); // Declare game question
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
  console.log(`Congratulations, ${playerName}!`);
};

export default runBrainGames;
