var secret = Math.floor(Math.random() * 10) + 1;
var active = true;

function guessNumber() {
    var guess = prompt("Please guess a number between 1 to 10.");
    checkAnswer(guess);
}

function checkAnswer(guess) {
    while (active) {
        if (parseInt(guess) === secret) {
            alert("Congratulations! Your answer is correct.");
            active = false;
        } else if (parseInt(guess) > secret) {
            alert("Incorrect! Your guess is greater than the answer.");
            guessNumber();
        } else if (parseInt(guess) < secret) {
            alert("Incorrect! Your guess is smaller than the answer.");
            guessNumber();
        } else {
            alert("Invalid input! Please enter a number.");
            guessNumber();
        }

    }
}