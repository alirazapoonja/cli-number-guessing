#! /usr/bin/env node 

import inqurier from "inquirer"; 

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inqurier.prompt([
{
    name: "userGuessNumber",
    type: "number",
    message: "Please guess a number between 1-10: ",
    }
]);



if(answers.userGuessNumber === randomNumber ){
    console.log("Congtratulations! you guessed right number.");
    }
    else {
        console.log("you guessted wrong number");
    }
    
