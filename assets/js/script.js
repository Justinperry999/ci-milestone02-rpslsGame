// Wait for  DOM to complete loading before running the code
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {

    //Add event listener to game buttons
    let buttons = document.getElementsByClassName("ingame-btn");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let userChoice = this.getAttribute("data-type");
            runGame(userChoice);

        });

        //Add event listener to the start game button
        document.getElementById("play-game-btn").addEventListener("click", function () {
            window.location.href = "#game-page";
        });

        //Add event listener to the feedback button
        document.getElementById("feedback-btn").addEventListener("click", function () {
            window.location.href = "#feedback-page";
        });

        //Add event listener to the play again button
        document.getElementById("play-again-btn").addEventListener("click", function () {
            document.getElementById("game-result").style.display = "none";
            document.getElementById("play-again-btn").onclick = restartGame();
        });
    }

    clearScores();
});

// Main game functions

/**
* Contains the main game functionality, called when the user selects their first weapon.
*/
function runGame(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "paperrock":
        case "rocklizard":
        case "lizardspock":
        case "spockscissors":
        case "scissorslizard":
        case "lizardpaper":
        case "paperspock":
        case "spockrock":
        case "rockscissors":
            userWin(userChoice, computerChoice);
            break;
        case "paperscissors":
        case "rockpaper":
        case "lizardrock":
        case "spocklizard":
        case "scissorsspock":
        case "lizardscissors":
        case "paperlizard":
        case "spockpaper":
        case "rockspock":
        case "scissorsrock":
            userLose(userChoice, computerChoice);
            break;
        case "paperpaper":
        case "rockrock":
        case "lizardlizard":
        case "spockspock":
        case "scissorsscissors":
            Draw(userChoice, computerChoice);
            break;
    }

}

/**
* generates the computers choice at random.
*/

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let randomNumber = Math.floor(Math.random() * 5);
    return (choices[randomNumber]);
}

/**
* if the user wins, 1 point added to the users score on the scoreboard and generates 'you win' text.
*/

function userWin(userChoice, computerChoice) {
    let userScore_span = document.getElementById("user-score");
    let compScore_span = document.getElementById("comp-score");
    let userScore = parseInt(userScore_span.innerText);
    let compScore = parseInt(compScore_span.innerText);
    let roundResult_p = document.querySelector(".round-result > p");
    let gameResult = document.getElementById("game-result");
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    if (userScore < 5) {
        roundResult_p.innerHTML = `${userChoice} beats ${computerChoice} You Win!`;
    } else if (userScore === 5) {
        gameResult.innerText = "You Reached 5! YOU WON!";
        endGame();
    }
}

/**
* if the user loses, 1 point added to the computers score on the scoreboard and generates 'you lose' text.
*/

function userLose(userChoice, computerChoice) {
    let userScore_span = document.getElementById("user-score");
    let compScore_span = document.getElementById("comp-score");
    let userScore = parseInt(userScore_span.innerText);
    let compScore = parseInt(compScore_span.innerText);
    let roundResult_p = document.querySelector(".round-result > p");
    let gameResult = document.getElementById("game-result");
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    if (compScore < 5) {
        roundResult_p.innerHTML = `${computerChoice} beats ${userChoice} You Lose!`;
    } else if (compScore === 5) {
        gameResult.innerText = "Sorry, YOU LOST!";
        endGame();
    }
}

/**
* if it's a draw, generates 'it's a draw' text.
*/

function Draw(userChoice, computerChoice) {
    let roundResult_p = document.querySelector(".round-result > p");
    roundResult_p.innerHTML = `${userChoice} equals ${computerChoice} It's a Draw!`;
}

/**
* when the endgame function is called, the user choice buttons are disabled.
*/

function endGame() {
    let rock_div = document.getElementById("rock-btn");
    let paper_div = document.getElementById("paper-btn");
    let scissors_div = document.getElementById("scissors-btn");
    let lizard_div = document.getElementById("lizard-btn");
    let spock_div = document.getElementById("spock-btn");
    rock_div.disabled = true;
    paper_div.disabled = true;
    scissors_div.disabled = true;
    lizard_div.disabled = true;
    spock_div.disabled = true;
}


/**
* when the clearScores function is called, both the users score and the computers score return to 0.
*/

function clearScores() {
    let userScore_span = document.getElementById("user-score");
    let compScore_span = document.getElementById("comp-score");
    let userScore = parseInt(userScore_span.innerText);
    let compScore = parseInt(compScore_span.innerText);
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}

/**
* when the restartGame function is called, the user choice buttons are enabled.
*/

function restartGame() {
    clearScores();
    let rock_div = document.getElementById("rock-btn");
    let paper_div = document.getElementById("paper-btn");
    let scissors_div = document.getElementById("scissors-btn");
    let lizard_div = document.getElementById("lizard-btn");
    let spock_div = document.getElementById("spock-btn");
    rock_div.disabled = false;
    paper_div.disabled = false;
    scissors_div.disabled = false;
    lizard_div.disabled = false;
    spock_div.disabled = false;
}
