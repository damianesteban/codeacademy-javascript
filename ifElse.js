// If and Else
var promptUser = function () {
    var userChoice = "Rock, Paper or Scissors?";
    prompt(userChoice);
        if (userChoice !== "rock" || "paper" || "scissors") {
            prompt(userChoice);
        } else {
            console.log("poops");
        }
}

promptUser();

