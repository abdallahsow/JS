// Challenge 5:
// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
// Render the welcome message using welcomeEl.innerText

let identifier = " Abdallah Sow"
let greeting = "Welcome to Archi's Academy"
let welcomeMessage = greeting + identifier

let welcomeEl = document.getElementById("welcome-el")

function render() {
    welcomeEl.innerText = welcomeMessage
}

render()