import readlineSync from 'readline-sync';

export const hello = () => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
}

export const getRandonInt = (max) => {
    return Math.floor(Math.random() * max);
}