// Challenge 1
let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

function startGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card!";
  } else if (sum === 21) {
    message = "You've got a Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
  }
  sumEl.textContent = "Sum:" + sum;
  messageEl.textContent = message;
}

// console.log(message)

// Challenge 2
// Check if the person is elegible for a birthday card from the King! (100)

// let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }
