#!/usr/bin/env node

import {
  hello, getRandonInt, congratulations, getAnswer,
} from '../src/cli.js';

const isHonest = (int) => (int % 2 === 0 ? 'yes' : 'no');

const gameIsChet = () => {
  const userName = hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count !== 3) {
    const number = getRandonInt(100);
    const correctAnswer = isHonest(number);
    const userAnswer = getAnswer(number);
    if (userAnswer === correctAnswer) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      break;
    }
  }
  congratulations(count, userName);
};

gameIsChet();
