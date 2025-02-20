#!/usr/bin/env node


import readlineSync from 'readline-sync';
import {hello} from '../src/cli.js';

const getRandonInt = (max) => {
    return Math.floor(Math.random() * max);
}

const isHonest = (int) => {
    return int % 2 === 0 ? "yes" : "no";
} 

const gameIsChet = () => {
    const userName = hello();
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let count = 0;
    while (count != 3) {
        const number = getRandonInt(100);
        const correctAnswer = isHonest(number);
        console.log(`Question: ${number}`)
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === correctAnswer) {
            count++;
            console.log("Correct!");
        } else {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
            break;
        }
    }
    if (count === 3) {
        console.log(`Congratulations, ${userName}!`)
    }
}

gameIsChet();