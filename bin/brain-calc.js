#!/usr/bin/env node


import readlineSync from 'readline-sync';
import {hello, getRandonInt} from '../src/cli.js';


const calcGame = () => { 
    const userName = hello();
    console.log('What is the result of the expression?');
    let count = 0;
    while (count !== 3) {
        const firstInt = getRandonInt(50);
        const secondInt = getRandonInt(50);
        const operatorNumber = getRandonInt(2);
        let oprator;
        let correctAnswer;
        switch (operatorNumber) {
            case 0: 
                correctAnswer = firstInt + secondInt;
                oprator = "+";
                break;
            case 1:
                correctAnswer = firstInt - secondInt;
                oprator = "-";
                break;
            case 2:
                correctAnswer = firstInt * secondInt;
                oprator = "*";
                break;
        };
        console.log(`Question: ${firstInt} ${oprator} ${secondInt}`)
        const userAnswer = readlineSync.question('Your answer: ');
        if (correctAnswer === +userAnswer){
            count++;
            console.log("Correct!");
        } else {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userAnswer}!`);
            break;
        }
    }

    if (count === 3) {
        console.log(`Congratulations, ${userName}!`)
    }
}

calcGame()