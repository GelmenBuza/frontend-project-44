import getRandonInt from '../helpers.js';

export default () => {
  const Answers = [];
  let count = 0;
  while (count !== 3) {
    const firstInt = getRandonInt(50);
    const secondInt = getRandonInt(50);
    const operatorNumber = getRandonInt(2);
    let oprator;
    let correctAnswer;
    switch (operatorNumber) {
      case 0:
        correctAnswer = firstInt + secondInt;
        oprator = '+';
        break;
      case 1:
        correctAnswer = firstInt - secondInt;
        oprator = '-';
        break;
      case 2:
        correctAnswer = firstInt * secondInt;
        oprator = '*';
        break;
      default:
        break;
    }

    Answers.push([`${firstInt} ${oprator} ${secondInt}`, `${correctAnswer}`]);
    count += 1;
  }

  return Answers;
};
