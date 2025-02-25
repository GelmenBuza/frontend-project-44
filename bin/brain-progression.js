#!/usr/bin/env node


import {hello, getRandonInt, congratulations, getAnswer} from '../src/cli.js';



const makeProgress = () => {
    const masProg = [];
    let countEllOfProg = getRandonInt(15);
    if (countEllOfProg < 5) {
        countEllOfProg = 5;
    }
    let progDifference = getRandonInt(10);
    if (progDifference === 0) {
        progDifference = 1;
    }

    let startOfProgression = getRandonInt(100);
    const correctAnswerIndex = getRandonInt(countEllOfProg - 1);
    let correctAnswer;
    for (let i = 0; i < countEllOfProg; i++) {
        if (i === correctAnswerIndex) {
            masProg.push("..");
            correctAnswer = startOfProgression;
            startOfProgression += progDifference;
        }
        masProg.push(startOfProgression);
        startOfProgression += progDifference;
    }
    const stringProg = masProg.join(' ')
    return [stringProg, correctAnswer];
}




const gameProg = () => {
    const userName = hello();
    console.log('What number is missing in the progression?')
    let count = 0;
    while (count != 3) {
        const [stringProg, correctAnswer] = makeProgress();
        const userAnswer = getAnswer(stringProg);
        if (+userAnswer === correctAnswer){
            count++
            console.log("Correct!");
        } else {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
            break;
        }
    }
    congratulations(count, userName);
}
gameProg();