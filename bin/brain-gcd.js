import {
  hello, getRandonInt, congratulations, getAnswer,
} from '../src/cli';

const NOD = (x, y) => {
  if (y > x) {
    return NOD(y, x);
  } if (!y) {
    return x;
  }
  return NOD(y, x % y);
};

const gameNOD = () => {
  const userName = hello();
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;
  while (count !== 3) {
    const firstInt = getRandonInt(100);
    const secondInt = getRandonInt(100);
    const correctAnswer = NOD(firstInt, secondInt);
    const userAnswer = getAnswer(`${firstInt} ${secondInt}`);
    if (+userAnswer === correctAnswer) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      break;
    }
  }
  congratulations(count, userName);
};

gameNOD();
