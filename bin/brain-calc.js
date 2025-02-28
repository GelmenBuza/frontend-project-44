#!/usr/bin/env node

import calcRoundsMaker from '../src/games/calc-rounds-maker.js';
import checkAnswers from '../src/index.js';

const calcGame = () => {
  const [Answers, question] = calcRoundsMaker();
  checkAnswers(Answers, question);
};

calcGame();
