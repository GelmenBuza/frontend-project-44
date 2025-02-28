#!/usr/bin/env node

import evenRoundsMaker from '../src/games/even-rounds-maker.js';
import checkAnswers from '../src/index.js';

const gameEven = () => {
  const [Answers, question] = evenRoundsMaker();
  checkAnswers(Answers, question);
};

gameEven();
