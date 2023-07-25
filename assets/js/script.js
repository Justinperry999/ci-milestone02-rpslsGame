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
            clearScore();
        });
    }
});
    // Main game functions

    /**
 * Contain the main game functionality, called when the user select their first weapon
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
                userWin(userChoice,computerChoice);
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
                userLose(userChoice,computerChoice);
                break;
            case "paperpaper":
            case "rockrock":
            case "lizardlizard":
            case "spockspock":
            case "scissorsscissors":
                Draw(userChoice,computerChoice);
                break;
        }

    }

    function userWeapon(choice, weapon) {

    }
   

    function getComputerChoice() {
        let choices = ['rock','paper','scissors','lizard','spock'];
        let randomNumber = Math.floor(Math.random()*5);
        return(choices[randomNumber]);
    }

    function userWin(userChoice,computerChoice) {
        let userScore_span = document.getElementById("user-score");
        let compScore_span = document.getElementById("comp-score");
        let userScore = parseInt(userScore_span.innerText);
        let compScore = parseInt(compScore_span.innerText);;
        let roundResult_p = document.querySelector(".round-result > p");
        let gameResult = document.getElementById("game-result");
        userScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        if (userScore < 5) {
        roundResult_p.innerHTML = `${userChoice} beats ${computerChoice} You Win!`;
        } else if (userScore === 5){
        gameResult.innerText = "You Reached 5! YOU WON!";
    }; 

    }

    function userLose(userChoice,computerChoice) {
        let userScore_span = document.getElementById("user-score");
        let compScore_span = document.getElementById("comp-score");
        let userScore = parseInt(userScore_span.innerText);
        let compScore = parseInt(compScore_span.innerText);;
        let roundResult_p = document.querySelector(".round-result > p");
        let gameResult = document.getElementById("game-result");
        compScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        if (compScore < 5) {
        roundResult_p.innerHTML = `${computerChoice} beats ${userChoice} You Lose!`;
        } else if (compScore === 5){
        gameResult.innerText = "Sorry, YOU LOST!";
    }; 
    }

    function Draw (userChoice,computerChoice) {
        let roundResult_p = document.querySelector(".round-result > p");
         roundResult_p.innerHTML = `${userChoice} matches ${computerChoice} It's a Draw!`;
    }


    function incrementCompScore() {

    }

    function countRounds() {

    }

    function clearScores() {

    };