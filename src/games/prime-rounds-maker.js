import getRandonInt from '../helpers.js';

const isPrime = (int) => {
  if (int === 0 || int === 1) {
    return 'no';
  }
  for (let i = 2; i < int; i += 1) {
    if (int % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const Answers = [];
  let count = 0;
  while (count !== 3) {
    const answer = getRandonInt(100);
    const correctAnswer = isPrime(answer);
    Answers.push([answer, correctAnswer]);
    count += 1;
  }
  return [Answers, question];
};
