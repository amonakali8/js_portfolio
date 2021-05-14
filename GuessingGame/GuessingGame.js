var game = document.getElementById("game");
var siteFooter = document.getElementById("siteFooter");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var yourAnswer = document.getElementById("yourAnswer");
var submit = document.getElementById("submit");
var answers = [];

submit.addEventListener("click", getAnswer);

askQuestion(0);

function askQuestion(questionNumber) {
    answer.style.display = "block";


    answers.length = questionNumber;

    switch (questionNumber) {
        case 0:
            question.innerHTML = "Please guess the secret number between 1 and 10";
            break;
        default:
            question.innerHTML = "Let's play again"
            break;
    }

}

function getAnswer() {
    cleanInput = yourAnswer.value.toUpperCase();
    answers.push(cleanInput);
    yourAnswer.value = "";
    continueStory(answers.length - 1);
}

function continueStory(answerNumber) {
    switch (answerNumber) {
        case 0:
            if (answers[0] === "7") {
                story.innerHTML = document.getElementById("answer07").innerHTML;
                askQuestion(1);
            } else if (answers[0] === "1") {
                story.innerHTML = document.getElementById("answer01").innerHTML;
                askQuestion(0);
            } else if (answers[0] === "2") {
                story.innerHTML = document.getElementById("answer02").innerHTML;
                askQuestion(0);
            } else if (answers[0] === "3") {
                story.innerHTML = document.getElementById("answer03").innerHTML;
                askQuestion(0);
            } else if (answers[0] === "4") {
                story.innerHTML = document.getElementById("answer04").innerHTML;
                askQuestion(0);
            } else if (answers[0] === "5") {
                story.innerHTML = document.getElementById("answer05").innerHTML;
                askQuestion(0);
            } else if (answers[0] === "6") {
                story.innerHTML = document.getElementById("answer06").innerHTML;
                askQuestion(0);
            } else if (answers[0] === "7") {
                story.innerHTML = document.getElementById("answer07").innerHTML;
                askQuestion(1);
            } else if (answers[0] === "8") {
                story.innerHTML = document.getElementById("answer08").innerHTML;
                askQuestion(0);
            } else if (answers[0] === "9") {
                story.innerHTML = document.getElementById("answer09").innerHTML;
                askQuestion(0);
            } else if (answers[0] === "10") {
                story.innerHTML = document.getElementById("answer10").innerHTML;
                askQuestion(0);
            } else {
                story.innerHTML = document.getElementById("err0").innerHTML;
                askQuestion(0);
            }
            break;

        default:
            story.innerHTML = "The game is over!";
            break;
    }
}

function theEnd() {
    story.innerHTML += "<p>The End.</p>";
    question.innerHTML = "";
    answer.style.display = "none";
}