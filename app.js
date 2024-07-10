let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")
const drawGame = () => {
    msg.innerText = "Draw. Try Again!"
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = "You win"
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = "you lose!!"
    }
}


const playGame = (userChoice) => {
    const compChoice = genCompchoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true
        } else {
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin);
    }
}

const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randmidx = Math.floor(Math.random() * 3);
    return options[randmidx];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
