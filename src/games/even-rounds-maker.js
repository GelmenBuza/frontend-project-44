import getRandonInt from '../helpers.js';

const isEven = (int) => (int % 2 === 0 ? 'yes' : 'no');

export default () => {
  let count = 0;
  const Answers = [];
  while (count !== 3) {
    const number = getRandonInt(100);
    const correctAnswer = isEven(number);
    Answers.push([number, correctAnswer]);
    count += 1;
  }
  return Answers;
};
