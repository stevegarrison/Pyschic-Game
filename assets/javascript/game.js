// An array of all the letters in the alphabet
var letters = ["a", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

// Variables to hold our wins, losses and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var alreadyGuessed = [];

// Create variables that hold references to the places in the HTML where we want to display things
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var alreadyGuessedText = document.getElementById("already-guessed-text");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    //Determines which key was pressed
    var userGuess = event.key.toLowerCase();

    // Logic of a win/loss or tie
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        alreadyGuessed = [];
    } else {
        guessesLeft--;
        alreadyGuessed.push(userGuess);
    }
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        alreadyGuessed = [];
    }

    // Display wins and losses 
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;

    // Display Guesses Left and Guesses already attempted
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    alreadyGuessedText.textContent = "You have already guessed: " + alreadyGuessed.join(", ");
}