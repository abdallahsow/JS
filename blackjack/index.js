let firstCard = 2
let secondCard = 5
let sum = firstCard + secondCard

console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card! 🙂");
} else if (sum === 21) {
    console.log("Wohoo! You've got a Blackjack! 🥳");
} else {
    console.log("You're out of the game! 😭");
}