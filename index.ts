import inquirer from "inquirer";

const systemGeneratedNo = Math.floor(Math.random() * 10+ 1 );

let numTries: number = 3;
let play: boolean = true;

type ansType = {
    userGuess: number
}

type playAgainAnswerType = {
    playAgain: boolean
}

while (play) {
while (numTries > 0) {

const answers : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess any number between 1 to 10: "
    },
]);

const {userGuess} = answers;

console.log(userGuess, "userGuess", systemGeneratedNo, 'SYs')
console.log(`You have ${numTries- 1} left `)

if(answers.userGuess === systemGeneratedNo){
    console.log("Yess your answer is correct \n You Win!!")
    numTries = 0
} 
else {
    console.log("Please try again Better luck next time!");
    if (systemGeneratedNo > answers.userGuess) console.log("Think higher");
    else{
        console.log("Think lower");
    
    }
}
  numTries--;
}
}
  const playAgainAnswer = await inquirer.prompt ([
    {
        type: "confirm",
        name:"playAgain",
        message: "Wanna play again",
    },
  ]); 
  console.log("playAgain",playAgainAnswer);
  if (playAgainAnswer.playAgain) {
    numTries = 3;
    const systemGeneratedNo = Math.floor(Math.random() * 10+ 1 );
  } else {
    console.log("Exitting game.....")
    play = false;
  }



