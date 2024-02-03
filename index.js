// index.js

// Function to generate a random number between 1 and 6
function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// Create variables for random numbers
var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();

// Get the left and right dice elements
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

// Set the src attributes of the left and right img elements based on random numbers
img1.src = "./images/dice" + randomNumber1 + ".png";
img2.src = "./images/dice" + randomNumber2 + ".png";

// Get the h1 element
var resultText = document.querySelector("h1");

// Compare dice values and update the h1 text accordingly
if (randomNumber1 > randomNumber2) {
  resultText.textContent = " 🚩Player 1 Wins! ";
} else if (randomNumber1 < randomNumber2) {
  resultText.textContent = "Player 2 Wins! 🚩 ";
} else {
  resultText.textContent = "It's a Draw!";
}
