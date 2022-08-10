let hands = ["rock", "paper", "scissor"];

function playGame() {
    let round = Math.floor(Math.random() * hands.length);
    return round
}

console.log(hands[playGame()])
