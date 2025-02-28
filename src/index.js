import { hello, getAnswer, congratulations } from './cli.js';

export default (Answers, questions) => {
  const userName = hello();
  console.log(questions);
  let count = 0;
  for (const [question, correctAnswer] of Answers) {
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
