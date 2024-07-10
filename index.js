#! /usr/bin/env node
// Project Quiz System:
// The app will show the students the result of the quiz.
// In the end it will show the students the result of the quiz.
import inquirer from "inquirer";
console.log("Welcome to the quiz based game:");
console.log("You are required to gain maximum 4 points for the window.");
let points = 0;
// question1:
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "TypeScript is a superset off?",
        type: "list",
        choices: ["c++", "Python", "java", "javascript"],
    }
]);
if (question1.one == "javascript") {
    console.log("Your answer is correct!");
    points++;
}
else {
    console.log("incorrect answer");
}
//question2:
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "Which command is used to compile a TypeScript file to JavaScript?",
        type: "list",
        choices: ["tsc", "npm", "node", "ts-node"],
    }
]);
if (question2.two == "tsc") {
    console.log("Your answer is correct!");
    points++;
}
else {
    console.log("incorrect answer");
}
// question3:
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "Which of the following is a TypeScript data type?",
        type: "list",
        choices: ["int", "float", "boolean", "decimal"],
    }
]);
if (question3.three == "boolean") {
    console.log("Your answer is correct!");
    points++;
}
else {
    console.log("incorrect answer");
}
// question4:
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "Which TypeScript feature allows you to ensure the correctness of your code by checking the types of variables at compile time?",
        type: "list",
        choices: ["Interfaces", "Type Inference", "Type Annotations", "Modules"],
    }
]);
if (question4.four == "Type Annotations") {
    console.log("Your answer is correct!");
    points++;
}
else {
    console.log("incorrect answer");
}
// question5:
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "How do you define a string array in TypeScript?",
        type: "list",
        choices: ["let names: string[];", "let names: Array<string>;", "let names: string();", "Both A and B"],
    }
]);
if (question5.five == "Both A and B") {
    console.log("Your answer is correct!");
    points++;
}
else {
    console.log("incorrect answer");
}
// output conditions:
if (points >= 4) {
    console.log("Congratulations!");
    console.log(`Your points: ${points}`);
}
else {
    console.log("low score! try again next time..");
    console.log(`Your points: ${points}`);
}
