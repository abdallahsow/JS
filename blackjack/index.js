// Challenge 1
let firstCard = getRandom();
let secondCard = getRandom();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandom() {
  return 5
}

function startGame() {
  renderGame();
}

function renderGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card!";
  } else if (sum === 21) {
    message = "You've got a Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
  }

  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = message;
}

function newCard() {
  console.log("Drawing a new card from the deck!");
  thirdCard = getRandom();
  sum += thirdCard;
  cards.push(thirdCard);
  renderGame();
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
