// TODO: Create an array with five question objects
var questions = [
    { q: "The earth is the fourth planet from the sun.", a: "false" },
    { q: "The planet Venus has no moons.", a: "true" },
    { q: "Jupiter is composed mostly of iron.", a: "false" },
    { q: "The sun is a star of average size.", a: "true" },
    { q: "A lunar eclipse occurs when the sun passes.", a: "false" }
];

// TODO: Create a variable to keep track of the score
var score = 0;
// TODO: Iterate over the questions array and display each question in a confirmation box
function askQuestions() {
    for (var i = 0; i < questions.length; i++) {
        var answer = confirm(questions[i]["q"]);

        // TODO: Check the user's answer against the correct answer
        // TODO: Alert the user if they are correct or wrong. Increment the score accordingly
        if (String(answer) === questions[i]["a"]) {
            alert("That is correct!");
            score++;
        }
        else {
            alert("WRONG!");
        }
    }
}

askQuestions();

// TODO: At the end of the game, alert the user with the final score

alert("Congratulations! You finished with a total score of " + score + "!");

