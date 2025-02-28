#!/usr/bin/env node

import NODRoundsMaker from '../src/games/gcd-rounds-maker.js';
import checkAnswers from '../src/index.js';

const gameNOD = () => {
  const [Answers, question] = NODRoundsMaker();
  checkAnswers(Answers, question);
};

gameNOD();
