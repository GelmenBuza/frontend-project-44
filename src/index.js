import { hello, getAnswer, congratulations } from './cli.js';

export default (rounds, description) => {
  const userName = hello();
  console.log(description);
  let count = 0;
  for (let i = 0; i < rounds.length; i += 1) {
    const question = rounds[i][0];
    const correctAnswer = rounds[i][1];
    const userAnswer = getAnswer(question);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      break;
    }
  }
  congratulations(count, userName);
};
