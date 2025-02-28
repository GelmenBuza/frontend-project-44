import getRandonInt from '../helpers.js';

const makeProgress = () => {
  const masProg = [];
  let countEllOfProg = getRandonInt(15);
  if (countEllOfProg < 5) {
    countEllOfProg = 5;
  }
  let progDifference = getRandonInt(10);
  if (progDifference === 0) {
    progDifference = 1;
  }

  let startOfProgression = getRandonInt(100);
  const correctAnswerIndex = getRandonInt(countEllOfProg - 1);
  let correctAnswer;
  for (let i = 0; i < countEllOfProg; i += 1) {
    if (i === correctAnswerIndex) {
      masProg.push('..');
      correctAnswer = startOfProgression;
      startOfProgression += progDifference;
    }
    masProg.push(startOfProgression);
    startOfProgression += progDifference;
  }
  const stringProg = masProg.join(' ');
  return [stringProg, `${correctAnswer}`];
};

export default () => {
  const Answers = [];
  let count = 0;
  while (count !== 3) {
    Answers.push(makeProgress());
    count += 1;
  }

  return Answers;
};
