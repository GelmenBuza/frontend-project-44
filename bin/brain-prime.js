#!/usr/bin/env node

import primeRoundsMaker from '../src/games/prime-rounds-maker.js';
import checkAnswers from '../src/index.js';

const gamePrime = () => {
  const [rounds, description] = primeRoundsMaker();
  checkAnswers(rounds, description);
};

gamePrime();
