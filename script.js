const getComputerChoice = () => { 
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice) {
        case 1:
            return "ROCK"
        case 2:
            return "PAPER"
        case 3:
            return "SCISSORS"
        default:
            alert("There seems to be an error with the AI")
    };
};

const getHumanChoice = () => {
    let humanChoice = prompt("ROCK PAPER Scissors").toLowerCase();
    if (humanChoice == "ROCK" || humanChoice == "PAPER" || humanChoice == "SCISSORS") {
        return humanChoice;
    } else {
        alert("Only input (ROCK PAPER Scissors)");
    }
};

const playGame = () => {
    let humanScore = 0; 
    let computerScore = 0;
    
        const playRound = (humanChoice, computerChoice) => {
            let outcome;

            if (humanChoice == computerChoice){
                outcome = "draw"
            }  else if (humanChoice == "PAPER"    && computerChoice == "ROCK" || 
                        humanChoice == "ROCK"     && computerChoice == "SCISSORS" ||
                        humanChoice == "SCISSORS" && computerChoice == "PAPER"){
                            outcome = "win";
            } else if (computerChoice == "PAPER"    && humanChoice == "ROCK" || 
                       computerChoice == "ROCK"     && humanChoice == "SCISSORS" ||
                       computerChoice == "SCISSORS" && humanChoice == "PAPER"){
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
        
    // Uncomment when want the condition to be: 
    // While score is not yet 5 keep playing 
    // while (humanScore < 5 && computerScore < 5){
    //     playRound(getHumanChoice(), "ROCK");
    // };

    let choices = document.querySelector(".buttonContainer");

    choices.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id){
            case 'rockButton':
                playRound("ROCK", getComputerChoice());
                break;
            case 'paperButton':
                playRound("PAPER", getComputerChoice());
                break;
            case 'scissorsButton':
                playRound("SCISSORS", getComputerChoice());
                break;
        }

    });

};



playGame()