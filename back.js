let userScore = 0;
let botScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

function gameRes(userWin) {
    if (userWin === true) {
        msg.innerHTML = "You win! Hurray 😎";
        userScore++;
        document.getElementById("userScore").innerText = userScore;
    } else {
        msg.innerHTML = "You lost! 👿";
        botScore++;
        document.getElementById("botScore").innerText = botScore;
    }
}

function drawGame() {
    msg.innerHTML = "Game was a Draw!!";
}

function botPick() {
    const options = ["rock", "paper", "scissors"];
    let pick = Math.floor(Math.random() * 3);
    return options[pick]; // return rock, paper, or scissors
}

function playGame(userChoice) {
    const botChoice = botPick();

    if (userChoice === botChoice) {
        drawGame();
    } else if (userChoice === "rock") {
        gameRes(botChoice !== "paper"); // user wins unless bot picks paper
    } else if (userChoice === "paper") {
        gameRes(botChoice !== "scissors"); // user wins unless bot picks scissors
    } else if (userChoice === "scissors") {
        gameRes(botChoice !== "rock"); // user wins unless bot picks rock
    }
}

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        console.log("User choice:", userChoice);
    });
});
