// Challenge 1
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false

console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card! 🙂");
} else if (sum === 21) {
    console.log("Wohoo! You've got a Blackjack! 🥳");
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭");
}

console.log(hasBlackJack)

// Challenge 2
// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
    console.log("Not elegible")
} else if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}