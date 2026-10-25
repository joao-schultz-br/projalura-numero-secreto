const form = document.querySelector("#guess-form");
const input = document.querySelector("#guess-input");
const message = document.querySelector("#message");
const attemptsDisplay = document.querySelector("#attempts");
const restartButton = document.querySelector("#restart-button");

let secretNumber;
let attempts;
let gameOver;

function startGame() {
    secretNumber = Math.floor(Math.random() * 101);
    attempts = 0;
    gameOver = false;
    input.disabled = false;
    form.querySelector("button").disabled = false;
    input.value = "";
    message.textContent = "Digite um número e faça seu primeiro chute.";
    attemptsDisplay.textContent = "Tentativas: 0";
    restartButton.hidden = true;
    input.focus();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (gameOver) return;

    const guess = input.valueAsNumber;
    if (!Number.isInteger(guess) || guess < 0 || guess > 100) {
        message.textContent = "Digite um número inteiro entre 0 e 100.";
        input.focus();
        return;
    }

    attempts += 1;
    attemptsDisplay.textContent = `Tentativas: ${attempts}`;

    if (guess === secretNumber) {
        message.textContent = `Você acertou! O número secreto era ${secretNumber}.`;
        gameOver = true;
        input.disabled = true;
        form.querySelector("button").disabled = true;
        restartButton.hidden = false;
        restartButton.focus();
    } else if (guess < secretNumber) {
        message.textContent = "O número secreto é maior. Tente novamente!";
    } else {
        message.textContent = "O número secreto é menor. Tente novamente!";
    }

    input.value = "";
    if (!gameOver) input.focus();
});

restartButton.addEventListener("click", startGame);

startGame();