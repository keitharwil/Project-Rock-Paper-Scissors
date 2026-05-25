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
            playResults(outcome, humanChoice, computerChoice);
        };

        const playResults = (outcome, humanChoice, computerChoice) => {
            let outcomeAnnounce = document.querySelector("#outcomeAnnounce");
            let scores = document.querySelector("#scores");
            let humanChoiceDisplay = document.querySelector("#humanChoice");
            let computerChoiceDisplay = document.querySelector("#computerChoice");
            switch(outcome){
                case "win":
                    humanChoiceDisplay.textContent = `👨 Choice: ${humanChoice}`;
                    computerChoiceDisplay.textContent = `🖥️ Choice: ${computerChoice}`;
                    outcomeAnnounce.textContent = "You WIN this round!";
                    humanScore++;
                    scores.textContent= `👨 Score: ${humanScore} | 🖥️ Score: ${computerScore}`;
                    break;
                case "lose":
                    humanChoiceDisplay.textContent = `👨 Choice: ${humanChoice}`;
                    computerChoiceDisplay.textContent = `🖥️ Choice: ${computerChoice}`;                  outcomeAnnounce.textContent = "You LOSE this round :(";
                    computerScore++;
                    scores.textContent = `👨 Score: ${humanScore} | 🖥️ Score: ${computerScore}`;
                    break;
                case "draw":
                    humanChoiceDisplay.textContent = `👨 Choice: ${humanChoice}`;
                    computerChoiceDisplay.textContent = `🖥️ Choice: ${computerChoice}`; 
                    outcomeAnnounce.textContent = "It's a DRAW";
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


playGame();