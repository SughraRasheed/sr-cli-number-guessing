#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1)

const answers = await inquirer.prompt([{
  name : "userRandomNumber",
  type: "number",
  message: "Guess a random number between 1 to 6 ",
}])
if (answers.userRandomNumber === randomNumber){
    console.log("congratulations! you guessed a right number")
}
else {console.log("Sorry..  you guessed a wrong number")}