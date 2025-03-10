#!/usr/bin/env node

import NODRoundsMaker from '../src/games/gcd-rounds-maker.js';
import checkAnswers from '../src/index.js';

const gameNOD = () => {
  const [rounds, description] = NODRoundsMaker();
  checkAnswers(rounds, description);
};

gameNOD();
