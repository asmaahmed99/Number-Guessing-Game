import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
let numTries = 3;
while (numTries > 0) {
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Guess any number between 1 to 10: "
        },
    ]);
    const { userGuess } = answers;
    console.log(userGuess, "userGuess", systemGeneratedNo, 'SYs');
    console.log(`You have ${numTries - 1} left `);
    if (answers.userGuess === systemGeneratedNo) {
        console.log("Yess your answer is correct \n You Win!!");
    }
    else {
        console.log("Please try again Better luck next time!");
    }
    numTries--;
}
