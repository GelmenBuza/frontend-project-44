import getRandonInt from '../getRandomInt.js';

const isEven = (int) => (int % 2 === 0 ? 'yes' : 'no');

export default () => {
  let count = 0;
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];
  while (count !== 3) {
    const number = getRandonInt(100);
    const correctAnswer = isEven(number);
    rounds.push([number, correctAnswer]);
    count += 1;
  }
  return [rounds, description];
};
