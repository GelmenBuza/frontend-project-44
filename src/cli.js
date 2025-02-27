import readlineSync from 'readline-sync';

export const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandonInt = (max) => Math.floor(Math.random() * max);

export const congratulations = (count, userName) => {
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const getAnswer = (example) => {
  console.log(`Question: ${example}`);
  return readlineSync.question('Your answer: ');
};
