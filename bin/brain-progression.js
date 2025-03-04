#!/usr/bin/env node

import progRoundsMaker from '../src/games/progression-rounds-maker.js';
import checkAnswers from '../src/index.js';

const gameProg = () => {
  const [rounds, description] = progRoundsMaker();
  checkAnswers(rounds, description);
};

gameProg();
