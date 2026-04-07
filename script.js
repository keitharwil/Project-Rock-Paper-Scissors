const getComputerChoice = () => { 
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
        default:
            alert("There seems to be an error with the AI")
    };
};

const getHumanChoice = () => {
    let humanChoice = prompt("Rock Paper Scissors").toLowerCase();
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        return humanChoice;
    } else {
        alert("Only input (Rock Paper Scissors)");
    }
};

const playGame = () => {
    let humanScore = 0; 
    let computerScore = 0;
    let winner;

        const playRound = (humanChoice, computerChoice) => {
            let outcome;

            if (humanChoice == computerChoice){
                outcome = "draw"
            }  else if (humanChoice == "paper"    && computerChoice == "rock" || 
                        humanChoice == "rock"     && computerChoice == "scissors" ||
                        humanChoice == "scissors" && computerChoice == "paper"){
                            outcome = "win";
            } else if (computerChoice == "paper"    && humanChoice == "rock" || 
                       computerChoice == "rock"     && humanChoice == "scissors" ||
                       computerChoice == "scissors" && humanChoice == "paper"){
                            outcome = "lose";
            };

            switch(outcome){
                case "win":
                    console.log(`${humanChoice.toUpperCase()} and ${computerChoice.toUpperCase()}`);
                    console.log("You WIN this round!");
                    humanScore++;
                    console.log(`Your score: ${humanScore} | Computer Score: ${computerScore}`);
                    break;
                case "lose":
                    console.log(`${humanChoice.toUpperCase()} and ${computerChoice.toUpperCase()}`);
                    console.log("You LOSE this round :(");
                    computerScore++;
                    console.log(`Your score: ${humanScore} | Computer Score: ${computerScore}`);
                    break;
                case "draw":
                    console.log(`${humanChoice.toUpperCase()} and ${computerChoice.toUpperCase()}`);
                    console.log("It's a draw");
                    console.log(`Your score: ${humanScore} | Computer Score: ${computerScore}`);
                    break;
                default:
                    console.log("Error");
                    break;
            };
        };
    // Uncomment when the score is not yet 5 
    // while (humanScore < 5 && computerScore < 5){
    //     playRound(getHumanChoice(), "rock");
    // };

    for (let i = 0; i < 5; i++){ playRound(getHumanChoice(), getComputerChoice()) };
    
}

playGame()