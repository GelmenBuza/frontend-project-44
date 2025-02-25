#!/usr/bin/env node


import {hello, getRandonInt, congratulations, getAnswer} from '../src/cli.js';



const isPrime = (int) => {
    if (int === 0 || int === 1) {
        return false;
    } else {
        for (let i = 2; i < int; i++) {
            if (int % i === 0) {
                return false;
            }
        }
        return true;
    }
}


const gamePrime = () => {
    const userName = hello();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    let count = 0;
    while (count !== 3) {
        const answer = getRandonInt(100);
        const userAnswer = getAnswer(answer);
        const correctAnswerBool = isPrime(answer);
        let correctAnswer = "no"; 

        if (correctAnswerBool) correctAnswer = "yes";


        let checkUserAnswer = userAnswer;
        if (checkUserAnswer === "yes") {
            checkUserAnswer = true;
        } else if (checkUserAnswer === "no") {
            checkUserAnswer = false;
        }

        if (typeof(checkUserAnswer) !== "boolean") {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
            break;
        } else if (checkUserAnswer === correctAnswerBool) {
            count++
            console.log("Correct!");
        } else {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
            break;
        }
    }

    congratulations(count, userName);
}

gamePrime()