import { hello, getAnswer, congratulations } from './cli.js';

export default (Answers, questions) => {
  const userName = hello();
  console.log(questions);
  let count = 0;
  for (let i = 0; i < Answers.length; i += 1) {
    const question = Answers[i][0];
    const correctAnswer = Answers[i][1];
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
