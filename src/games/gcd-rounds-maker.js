import getRandonInt from '../helpers.js';

const NOD = (x, y) => {
  if (y > x) {
    return NOD(y, x);
  } if (!y) {
    return x;
  }
  return NOD(y, x % y);
};

export default () => {
  const Answers = [];
  let count = 0;
  while (count !== 3) {
    const firstInt = getRandonInt(100);
    const secondInt = getRandonInt(100);
    const correctAnswer = NOD(firstInt, secondInt);
    Answers.push([`${firstInt} ${secondInt}`, `${correctAnswer}`]);
    count += 1;
  }
  return Answers;
};
