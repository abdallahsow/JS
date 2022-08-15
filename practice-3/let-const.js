// SETTING THE STAGE
const player = "Per";
const opponent = "Arnold";
const game = "AmazingFighter"

let points = 0;
let hasWon = false;

// PLAYING THE GAME
points += 100;
hasWon = false;

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} has lost the game`)
}
