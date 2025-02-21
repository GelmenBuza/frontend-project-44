#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {hello, getRandonInt} from '../src/cli.js';

const NOD = (x, y) => {
	if (y > x){
        return NOD(y, x);
    } else if (!y) {
        return x;
    }
	return NOD(y, x % y);
}

const gameNOD = () => {
    const userName = hello();
    console.log('Find the greatest common divisor of given numbers.')
    let count = 0;
    while (count != 3) {
        const firstInt = getRandonInt(100);
        const secondInt = getRandonInt(100);
        const correctAnswer = NOD(firstInt, secondInt);
        console.log(`Question: ${firstInt} ${secondInt}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (+userAnswer === correctAnswer) {
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

gameNOD()