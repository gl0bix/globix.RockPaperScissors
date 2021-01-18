const gameDiv = document.querySelector('#game');
const choicesDiv = document.querySelector('#buttons');
const playerScoreDiv = document.querySelector('#playerScore');
const computerScoreDiv = document.querySelector('#computerScore');
const playerChoiceDiv = document.querySelector('#playerSelect');
const computerChoiceDiv = document.querySelector('computerSelect');
const buttons = document.querySelectorAll('input');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', function () {
        game(button.value);
        if (playerScore >= 5) {
            buttons.forEach(button => button.disabled = true);
            alert('Game Over. You Win! Reload to play again.');
        } else if (computerScore >= 5) {
            buttons.forEach(button => button.disabled = true);
            alert('Game Over. You Loose! Reload to play again.');
        }
    });
});

function computerPlay() {

    const choice = Math.floor((Math.random() * 4) + 1);
    if (choice == 1) return "rock";
    else if (choice == 2) return "paper";
    else return "scissors";

}
function play(pc, cc) {
    const roc = 'rock';
    const pap = 'paper'
    const sci = 'scissors';
    const playerWinMessage = "<br><p>Player wins this round! (";
    const computerWinMessage = "<br><p>Computer wins this round! ("
    let roundResult;


    if (pc == cc) {
        roundResult = "<br><p>Draw!</p><br>";
    } else if (pc == roc) {
        if (cc == pap) {
            roundResult = computerWinMessage + pap + " beats " + roc + ")</p><br>";
        } else if (cc == sci) {
            roundResult = playerWinMessage + roc + " beats " + sci + ")</p><br>";
        }
    } else if (pc == pap) {
        if (cc == sci) {
            roundResult = computerWinMessage + sci + " beat " + pap + ")</p><br>";
        } else if (cc == roc) {
            roundResult = playerWinMessage + pap + " beats " + roc + ")</p><br>";
        }
    } else if (pc == sci) {
        if (cc == roc) {
            roundResult = computerWinMessage + roc + " beats " + sci + ")</p><br>";
        } else if (cc == pap) {
            roundResult = playerWinMessage + sci + " beat " + pap + ")</p><br>";
        }
    } else {
        roundResult = "<br><p>Failure!</p><br>";
    }

    if (roundResult.search('Player wins') > -1) {
        playerScore++;
    } else if (roundResult.search('Computer wins') > -1) {
        computerScore++;
    }

    return roundResult;
}

function game(playerButton) {

    const playerChoice = playerButton;
    const computerChoice = computerPlay();

    let result = play(playerChoice, computerChoice);
    result = "<span>Players choice: " + playerChoice +
        "</span><br><span>Computers choice:" + computerChoice + "</span>" + result;
    console.log(result);

    playerScoreDiv.innerHTML = "<p>Player Score: " + playerScore + "</p>"
    computerScoreDiv.innerHTML = "<p>Computer Score: " + computerScore + "</p>"

    document.getElementById('result').innerHTML = result;

    return
}
