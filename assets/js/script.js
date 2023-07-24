// Wait for  DOM to complete loading before running the code
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {

    //Add event listener to game buttons
    let buttons = document.getElementsByClassName("ingame-btn");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let Choice = this.getAttribute("data-type");
            let Weapon = document.getElementById("userschoice");

            runGame(Choice, Weapon);
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
}
    // Main game functions

    /**
 * Contain the main game functionality, called when the user select their first weapon
 */
    function runGame(choice, weapon) {

    }

    function userWeapon(choice, weapon) {

    }
   

    function compWeapon() {

    }

    function displayOutcome() {

    }

    function incrementUserScore() {

    }

    function incrementCompScore() {

    }

    function countRounds() {

    }

    function clearScores() {

    };